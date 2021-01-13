# Lexical-scope

[zerocho님 블로그](https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e)]

함수를 호출할 때가 아닌 선언할 때 scope가 결정되는 것.

```javascript
var a = true;
function fn1() {
  var a = false;
  fn2();
}

function fn2() {
  console.log(a);
}

fn1(); // true가 나온다
```

만약 호출할 때 scope가 결정되게 된다면 다음과 같다고 볼 수 있다.

```javascript
var a = true;
function fn1() {
  var a = false;
  console.log(a);
}

fn1(); // false가 나온다
```
