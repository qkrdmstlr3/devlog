# Closure

[생활코딩](https://opentutorials.org/course/743/6544)

함수내에서 함수를 정의하고 사용하는 것. 내부의 함수는 환경을 기억하게 된다.

```javascript
function fn1() {
  var name = "shellboy";
  return function () {
    // 이 함수가 closure가 된다.
    return name;
  };
}

var c = fn1();
console.log(c()); // shellboy

c = null; // 메모리 관리를 위해서 사용이 끝나면 제거하는 것이 좋다
```

name이라는 값을 기억했다가 호출할 때 사용하고 있다.

### 용도

js는 기본적으로 private을 지원하지 않는데 closure를 사용하면 private환경을 만들 수 있게 된다.
(lexical scope와 연결해서 이해하면 편할 듯)

### 주의

```javascript
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    // lexical scope에 의해 i는 외부의 i를 참조하는 것 따라서 호출 할 때 i는 5가 되어있다
    return i;
  };
}
for (var index in arr) {
  console.log(arr[index]()); // 5 5 5 5 5
}
```

```javascript
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = (function (id) {
    // 외부함수를 만들어주어야함. 그래야 id를 지역변수로 취급
    return function () {
      return id;
    };
  })(i);
}
for (var index in arr) {
  console.log(arr[index]()); // 0 1 2 3 4
}
```
