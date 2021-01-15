# event

[모던 자바스크립트 - 이벤트 버블링/캡쳐링](https://ko.javascript.info/bubbling-and-capturing)

[모던 자바스크립트 - 이벤트 위임](https://ko.javascript.info/event-delegation)

## 이벤트 버블링

하위 엘리먼트에 발생한 이벤트가 상위 엘리먼트로 전달되는 형태

```html
<body>
  <main>
    <div>
      <span>text</span>
    </div>
  </main>
</body>
```

네 tag에 모두 click이벤트가 걸려있다고 가정.

span을 클릭할 경우 div > main > body도 클릭되게 된다.

addeventlistener의 두 번째 인자인 callback함수에서 event.stopPropagation()을 실행하면 이벤트 버블링을 막을 수 있다.

## 이벤트 캡처링

이벤트 등록을 할 때 addEventListener함수를 쓰게 되는데 마지막 인자로 `true`를 전달하면 이벤트 캡처링이 된다.

main 캡처링 이벤트를 걸고 클릭시 main > span > div > body순으로 발생

캡처링 이벤트를 한 것이 먼저 발생하고, 하위로 이벤트가 내려간 뒤, span에서 다시 버블링이 발생해서 올라온다

- event.target – 이벤트가 발생한 가장 안쪽의 요소
- event.currentTarget (=this) – 이벤트를 핸들링 하는 현재 요소 (핸들러가 실제 할당된 요소)

## 이벤트 위임

이벤트를 할당해야할 하위 엘리먼트들이 여러개 있을 때 일일이 이벤트를 달지 않고, 공통되는 상위 엘리먼트에 이벤트를 달아 `event.target`을 이용해서 하위 엘리먼트들을 한번에 제어하는 방식

```javascript
// closest는 자신의 부모 요소 중 해당 요소가 있는지 찾음
function eventHandler(event) {
  const div = event.target;
  if (div.tagName != "DIV") return;

  // logic
}
```

## js엔진과 이벤트루프

[캡틴 판교님](https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/)
[jbee님](https://asfirstalways.tistory.com/362)
[youtube](https://asfirstalways.tistory.com/362)
[테스트 사이트](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
