# Hoisting

https://developer.mozilla.org/ko/docs/Glossary/Hoisting

`함수` 안의 선언들을 모두 끌어올려서 해당 함수의 최상단에 선언하는 것(초기화가 아닌 선언만 끌어올린다)

변수 및 함수 선언이 물리적으로 작성한 코드의 상단으로 옮겨지는 것은 아님

변수 및 함수 선언은 컴파일 단계에서 메모리에 저장되지만, 코드에서 입력한 위치와 정확히 일치한 곳에 있다.

let과 const는 hoisting이 일어나지 않는다.

### 정상동작

```javascript
getName("eunsik");

function getName(name) {
  console.log(name);
}
```

### 에러

```javascript
func("eunsik");

var getName = function (name) {
  console.log(name);
};
```

```javascript
// 위의 예제에서 js parser의 hoisting결과
var getName;

getName("eunsik"); // error

getName = function (name) {
  console.log(name);
};
```

## 주의 사항

변수 선언이 함수 선언보다 상위로 끌어올려진다.
값이 할당되지 않은 변수의 경우 함수 선언문이 변수를 가진다.

```javascript
// 함수 선언문(호이스팅에 영향을 받음)
function func() {}

// 함수 표현식(호이스팅에 영향을 받지 않음)(변수만 상위에 선언됨)
var func = function () {};
```
