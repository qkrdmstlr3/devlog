---
title: Tail-recursion과 Performance(feat. OCaml)
date: '2021-04-03'
category: develop
---

## 들어가며

본격적으로 개발을 시작한지 1년 반이 넘었고 대학에 들어온지 5년이 지났다. 재귀에 대해서 배웠고 이곳저곳에서 사용해보았다. 재귀를 구현할 때 종종 만나는 Stack Overflow에러도 꽤나 보았다. 그런데 학교 강의를 듣던 중 Stack overflow를 피할 수 있는 tail-recursion이라는 방법이 있다는 것을 알게되었다(여태껏 재귀를 써왔으면서도 이런 방법이 있는지도 몰랐다니 반성한다..).

강의에서 배운 OCaml이라는 언어를 사용해서 Tail-recursion에 대해서 정리해보고, Tail-recursion이 `항상 효율적인지` 또한 살펴보자.

## 재귀와 에러

OS시간에 배운 것을 조금 써먹어보자면, 프로그램을 실행할 때 `User Context`와 System Context가 만들어진다. 만들어진 User Context는 메모리에 code, data, user stack등을 가지고 있게되는데 실행 중 함수가 호출된다면 `User stack`에 함수의 정보들(지역변수, 매개변수, 리턴 주소값 등)이 쌓이게 된다. 호출된 함수가 다른 함수를 호출하면 stack에 추가로 쌓게 되는 방식으로 동작하게 되고, 함수 종료 시 stack에 저장된 리턴 주소값을 이용해 원래 코드 위치로 돌아가게 된다.

대략적인 흐름을 이해했으니 간단한 재귀를 한 번 보자.

```ml
let rec factorial num =
  if num <= 1 then 1
  else num * factorial (num-1)
```

위 함수는 OCaml로 구현한 팩토리얼함수이다. 이 함수의 매개변수로 숫자를 넣어주면 자신을 반복해서 도는 방식으로 팩토리얼 값을 계산해서 반환한다. 그렇지만 백만과 같은 아주 큰 숫자를 넣게되면 `stack overflow`에러가 발생하게 된다.

![call-stack](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/call-stack.png)

아시다시피 재귀는 자기 자신을 반복해서 호출하는 함수이다. 위의 설명과 더불어 그림에서도 보이듯이 호출할 때 마다 User stack에 한 단계씩 쌓이게 되고 이것은 모두 메모리 사용으로 이어진다. 즉 호출이 반복될수록 User stack이 커지게 되고 그로인해 메모리 낭비가 점점 심해지는 것이다. stack이 너무 많이 쌓이게 되면 에러를 발생시킴으로써 메모리의 과도한 사용을 방지한다.

이 에러를 회피하기 위해서 다음 단락에서는 재귀 호출 최적화 기법인 `Tail recursion`으로 만들어진 백만 이상의 숫자를 넣어도 끄떡없는 팩토리얼함수를 보여준다.

## Tail-recursion

Tail-recursion(꼬리재귀)는 stack overflow에러를 피해갈 수 있는 방법으로서 아주 효율적으로 메모리를 사용하게 된다.

![tail-call-stack](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/tail-call-stack.png)

위의 사진은 Tail-recursion을 사용했을 때의 스택 변화이다. 호출한 모든 함수를 쌓으면서 진행하지 않는다. 뒤에 호출된 함수(B)는 먼저 호출된 함수(A)의 값을 받고 그 함수(A)에 대한 내용은 스택에서 지워버리는 방식으로 동작한다. 결론적으로 하나의 함수에 대한 정보만 스택에 남아있기 때문에 메모리 사용 측면에 있어서 아주 효율적이다.

Tail-recursive방식을 사용하기 위해서는 필요한 조건이 있다. 그것은 함수에서 가장 마지막에 재귀가 호출되어야 하며, 재귀호출 후에 수행할 연산이 남아있으면 안된다는 것이다. 이전 팩토리얼 함수에서 처럼 factorial호출 후 num을 곱하는 방식은 tail-recursive하게 동작하지 않는다.

```ml
let factorial num =
  let rec factorial_rec num acc =
    if num <= 1 then acc
    else factorial_rec (num-1) (acc * num)
  in
  factorial_rec num 1
```

위의 함수를 보면 factorial_rec를 호출한 다음에 처리해야할 연산이 없다. 대신 acc라는 누산기를 사용해서 결과를 저장해나가는 방식을 보여주고 있다.

Tail-recursive기능은 컴파일러에서 지원을 하고 있어야 하며, 그렇지 않다면 이러한 방식으로 코딩를 짜도 원하는대로 동작하지 않으니 주의해야된다.

## Tail-recursion은 만능일까?

그렇다면 모든 재귀를 Tail-recursion으로 구현하는 것이 항상 효율적일까? 우선 다음 사진을 한번 보자.

![ocaml-list](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/ocaml-list.png)

OCaml의 [List API](https://caml.inria.fr/pub/docs/manual-ocaml/libref/List.html)에서 캡처해온 사진이다. 빨간 네모상자를 보면 Tail-recursive으로 표시된 것도 있고 Not-tail-recursive로 표시된 것도 있다. 지금까지 설명한 것으로만 보면 Tail-recursion이 Not-tail-recursive보다 효율적인데, List의 내장함수들 중에는 Not-tail-recursive로 구현된 코드가 십여개 정도 보인다.

왜 그렇게 구현되어있을까? 구현 난이도가 높은 것일까?

```ml
(* 'a list -> 'b list -> ('a * 'b) list *)
let combine list1 list2 =
  let rec combine_tail list1 list2 acc =
    match list1, list2 with
    | [], [] -> acc
    | arg1 :: l1, arg2 :: l2 -> combine_tail l1 l2 ((arg1, arg2) :: acc)
    | _ -> failwith "error"
  in
  List.rev (combine_tail list1 list2 [])
```

이 코드는 combine함수를 나름의 Tail-recursive로 구현해본 코드이다. 물론 예외처리도 되어있지 않고 딱 정해진 역할만을 수행하는 단순한 코드이지만 얼핏 봐도 복잡해보이지는 않는다. 시간복잡도도 O(n)을 가지고 있으니 비효율적이지도 않다.

![ocaml-combine-result](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/ocaml-combine-result.png)

백만개의 길이를 가지는 두 개의 리스트를 내가 만든 combine함수와 List.combine함수에 인자로 주어 돌려본 결과이다. Tail-recursive로 구현한 내 함수는 에러 없이 잘 돌아가는 반면 Not-tail-recursive로 구현된 List함수는 에러를 내뱉는다.

그렇다면 왜 tail-recursive를 사용하지 않을까? 교수님께서 주신 답변을 조금 각색하자면 다음과 같다.

### 결론

몇몇 함수들이 tail-recursive로 구현되지 않은 이유는 바로 Performance issue에 있다. 이상한지 않은가? Performance 향상을 위해서 tail-recursive를 사용하는데 Performance issue때문에 non-tail-recursive를 사용한다니!

이것을 이해하기 위해서는 먼저 Performance의 종류에 대해서 알아야 한다. Performance는 크게 두 가지로 나누어 볼 수 있는데 하나는 `속도`이고 하나는 `메모리 사용량`이다.

Tail-recursion은 User stack을 쌓아가는 방식이 아님으로 `메모리 사용량`에 있어서는 매우 좋은 방식의 최적화이다. 그러나 어떤 경우에는, non-tail-recursion을 tail-recursion으로 바꾸기위해 list append를 수행해야 한다던지, list를 한번 뒤집어야 한다던지, 하는 추가적인 instruction을 수행해야 한다. 이러한 경우에는 추가적인 명령어 실행으로 인해 `속도`에 있어 약점을 가질 수 있다는 것이다. 당장 내가 구현한 함수를 보아도 마지막에 List.rev연산을 추가적으로 실행해주고 있다.

가끔 엄청나게 큰 리스트를 활용할 일이 있으나, 대부분의 경우 우리가 활용하는 리스트의 크기가 메모리를 초과할 만큼 크지는 않을 것이다. 라이브러리는 일반적인 프로그램을 대상으로 활용할 수 있도록 하고 있기때문에, 함수를 tail-recursion으로 구현시 성능에 손해를 보게 되는 경우에는 성능적인 이점을 얻기 위해 non-tail-recursive한 구현을 사용하는 것이다. 만일 엄청나게 큰 리스트를 활용할 일이 있다면 개발자는 다른 라이브러리를 찾아보거나 직접 구현해서 사용할 수 있다.

내가 짠 코드가 O(n)의 시간복잡도를 가지고 non-tail-recursive로 구현해본 것도 O(n)의 시간복잡도를 가지기 때문에 `성능과 속도`에 대해서 크게 고려를 못했던 것 같다. 하지만 실제 내부적인 구현은 더 복잡할 수 있고, 단순히 List를 한번 뒤집어주는 것 이상의 연산이 일어날 수도 있다. 이번 경험으로 Tail-recursion이라는 새로운 최적화 방법을 배운 것과 함께 성능에 대해서도 다시 한 번 되돌아볼 수 있는 기회가 되었다. 마지막으로 답변을 글에 사용하도록 허락해주신 교수님께 감사드립니다.
