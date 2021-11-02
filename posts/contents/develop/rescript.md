---
title: ReScript로 블로그 재구현하기(작성중)
date: "2021-11-03"
category: develop
---

## 계기

<img src="https://techstack-generator.vercel.app/rescript-icon.svg" width="200" />

ReScript에 대한 설명보다는 ReScript를 사용이유와 사용하며 겪은 느낌을 적었다.

블로그 코드를 리팩토링을 한 번 해야겠다는 생각은 계속하고있었다. 기존에 ts로 구현한 로직이 너무 더럽기도 하였고, 게임의 상태를 관리하기 위해서 구조 자체가 복잡했다. 다른 사이드 이펙트가 발생할 여지도 있었다. 그러던 중 작년 FE-CONF를 보다 `ReScript`라는 친구를 알게되었고, 이것으로 아예 재구현을 해보기로 마음먹었다.

가장 큰 이유로는 새로운 언어나 기술을 배우고 싶었지만 단순히 기술의 깊이 보다는 너비를 늘리는 느낌이라 새로운 것을 배우는데 약간의 거부감이 있었다. 주력 언어인 TS를 완벽하게 다룬다고 생각하지는 않는 상태에서 RUST니 Flutter니 확장시키는 것은 내 목표와는 조금 맞지않는다고할까? 그럼에도 불구하고 TS가 아닌 ReScript를 선택한 것은 다음과 같은 이유에서이다.

TS가 JS의 슈퍼셋이라면 ReScript는 서브셋이라고 볼 수 있다. 둘 다 JS에서 발전된 점이 동일하다. TS와 ReScript와의 차이점은 [여기](https://rescript-lang.org/docs/manual/latest/introduction#difference-vs-typescript)에 자세히 설명되어있다. 또한 ReScript는 OCaml이라는 함수형언어를 기본으로 하고 있기 때문에 강력한 타입을 가지고 있다. any따위는 허용되지 않는다는 것이다. 그외에도 불변성이나 pattern-matching같은 함수형언어의 특징들을 가지고있다. OCaml을 3학년 1학기때 배웠었는데 그 때 무척이나 재밌게 배웠던지라 한번 활용해보고 싶기도해서 좋은 경험이 될 수 있을 것이라고 생각했다. 결과적으로는 `ReScript를 사용해보며 TS와 뭐가 다른지 직접 겪어보자`를 목표로 잡고 재구현을 진행하였다.

## ReScript 사용후기

앞으로 기술된 장단점은 한 번의 프로젝트 경험으로 느낀 것임으로 정확하지 않을 수 있다.

### 장점

### 단점
