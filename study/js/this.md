## this

[mozilla](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)

this는 호출 상황에 따라 다르게 적용된다.

### 전역 실행 문맥(global execution context)

this는 전역 객체를 참조한다(window등)

### 함수 실행 문맥

(일반적으로 생각하면 호출한 것의 상위 부분이라 하면 될듯?(A.B면 A가 되는 것) 호출한 것이 없다면 전역이 되고)

1,2 번 경우에서는 호출된 환경이 아니라 직접 this를 정해줄 수 있다.

1. call에서 호출할 경우:

call()은 이미 할당되어있는 다른 객체의 함수/메소드를 호출하는 해당 객체에 재할당할때 사용된다.
this는 현재 객체(호출하는 객체)를 참조한다.
메소드를 한번 작성하면 새 객체를 위한 메소드를 재작성할 필요 없이 call()을 이용해 다른 객체에 상속할 수 있다.
첫번째 인자로는 this가 될 것을 설정해주고 이어지는 인자들은 바인드된 함수의 인수에 제공되어진다.
apply()는 call과 비슷하나 인자를 배열로 전달해주는 차이점이 있다.

```javascript
var a = {
  string: "aaa",
  func: function (arg) {
    console.log(this.string + arg);
  },
};

var b = {
  string: "bbb",
};

a.func(); // 'aaa';
a.func.call(b, "ccc"); // 'bbb'
```

2. bind에서 호출할 경우:

bind가 호출되면 호출한 함수와 같은 새로운 함수를 생성한다.
첫 번째 인자로는 this가 될 것을 설정해주고 이어지는 인자들은 바인드된 함수의 인수에 제공된다.

```javascript
function f(b) {
  return this.a + b;
}

var g = f.bind({ a: "azerty" }, "bbb");
console.log(g()); // azertybbb

var h = g.bind({ a: "yoo" }); // bind는 한 번만 동작함!
console.log(h()); // azertybbb
```

3. 화살표 함수에서 호출할 경우

화살표 함수에서 this는 자신을 감싼 정적 범위(lexical context)입니다. 전역 코드에서는 전역 객체를 가리킵니다.
(화살표 함수는 call, bind등으로 호출할 때 전달되는 this는 무시되어진다. 다만 첫 번째 매개변수는 지정해야된다(null))

화살표 함수에서의 this는 싸여진 lexical context의 것으로 유지 된다(쉽게 생각하면 상위 scope라 보면 될듯?).

```javascript
var f = (b) => {
  return this.a + b;
};

var g = f.bind({ a: "azerty" }, "bbb");
console.log(g()); // undefinedbbb

var fn = () => {
  return this;
};
console.log(fn()); // window객체

var obj = {
  bar: function () {
    var x = () => this;
    return x;
  },
};
var fn = obj.bar();
console.log(fn() === obj); // true

var fn2 = obj.bar;
console.log(fn2()() == window); // true

var fn3 = obj.bar.bind({ a: "hello" });
console.log(fn3()()); // {a: 'hello'}
```

4. 객체의 메서드로서

this는 그 객체의 값을 사용하게 된다.

```javascript
var obj = {
  name: "shellboy",
  getName: function () {
    return this.name;
  },
};

console.log(obj.getName()); // shellboy
// getName이 화살표 함수라면 window를 출력하게 된다
```

5. 생성자 함수로 객체를 생성할 때

new로 만들어진 함수의 this는 자기 자신을 가리킴

```javascript
var Person = function (name) {
  this.name = name;
};

var p = new Person("shellboy");
console.log(p.name); // shellboy
```
