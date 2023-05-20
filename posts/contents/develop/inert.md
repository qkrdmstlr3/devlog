---
id: 22
title: Inert속성이란?
date: '2023-04-09'
category: develop
summary: html속성 중 inert라는 속성에 대해서 알아봅니다
---

## Inert란?

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert)에서 inert는 아래와 같이 말하고 있다.

> `inert` 는 HTMLElement의 속성들 중 하나이며 boolean값을 갖는다. true값을 가진다면, 브라우저가 사용자의 input 이벤트들(마우스, 입력이벤트, [보조기술 이벤트](https://web.dev/the-accessibility-tree/))을 “무시한다”. 또한 브라우저는 해당 element에 대한 페이지 검색이나 단어 선택조차 무시한다. 이것은 모달 내부에 포커스를 “가두려는” UI를 구성할 때 유용하다.

즉 inert속성을 부여하면, pointer-events: none이 설정된 것처럼, 해당 element를 비활성상태로 만든다는 것이며, 스크린리더 여부에 상관없이 해당 요소와의 상호작용이 불가능해진다.

```html
<!-- 아래 버튼은 클릭할 수 없다 -->
<button inert>이것은 버튼입니다</button>
```

### aria-hidden과 다른 점

두 속성 다 접근성에 관련된 속성으로 알려져 있다. WAI-ARIA 중 하나인 aria-hidden은 스크린리더가 해당 콘텐츠를 탐색하는 것을 제한한다. 하지만 이것은 키보드 및 마우스 사용자 등과 같은 모든 사용자를 대상으로 콘텐츠를 숨기지는 못한다는 것에서 Inert속성과 차이를 보인다.

### pointer-events: none과 다른 점

inert와 pointer-events: none 둘 다 마우스 이벤트를 무시한다. 하지만 inert는 element를 “비대화형” 으로 만드는 반면에, pointer-events: none은 element는 대화형으로 유지하고 마우스 이벤트만 무시한다(다른 방식으로는 상호작용할 수 있다)는 차이점이 있다.

### 사용 사례

1. 드롭다운이나 숨겨진 메뉴를 탐색하지 못하게 할 필요가 있을 때
2. 모달 뒤의 배경처럼 상호작용할 수 없는 DOM 요소를 다루어야 할 때

## React에서 사용

하지만 React의 JSX문법에서 inert를 사용하려하면 아래와 같은 에러가 발생한다

```jsx
const Test = () => <div inert />;
```

> 'ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { css?: Interpolation<Theme>; }' 형식에 'inert' 속성이 없습니다.

[관련 이슈](https://github.com/WICG/inert/issues/58)에 따르면 react는 표준이 아닌 속성을 지원하지 않기 때문인데, 이는 inert가 도입되지 얼마되지 않은 스펙이기 때문이지 않을까 싶다. 실제로 [지원범위](https://caniuse.com/?search=inert)를 살펴보면 iOS에서는 15.5버전 이상부터 지원하는 것을 볼 수 있다. 최근 [react에 관련된 PR](https://github.com/facebook/react/pull/24730)이 올라오긴 했는데, 지금 바로 사용해야한다면 아래와 같이 사용해볼 수 있다.

```jsx
<div ref={(node) => node && (shouldBeInert ? node.setAttribute('inert', '') : node.removeAttribute('inert'))} />
```

### 비표준인 HTML태그 속성들을 사용하는 것은 옳은 것인가?

[스택오버플로우에 올라온 질문](https://stackoverflow.com/questions/209428/non-standard-attributes-on-html-tags-good-thing-bad-thing-your-thoughts)에 대한 답변들에 따르면, `data-` prefix를 가진 사용자 정의 속성들이 많이 있고, 많은 좋은 예시들이 있음으로 긍정적으로 본다는 반응들이 많다.

inert의 경우도 비슷하다고 생각이 드는데, iOS 15.5버전 이상에서만 지원하는 등 아직 프로덕션 레벨에서 사용하는 것은 시기상조라는 생각이 든다. 이렇게 브라우저 지원 범위가 높거나, svg의 feOffset 속성처럼 [지원범위가 모호한 경우](https://caniuse.com/?search=feOffset) 우회하는 방식으로 구현해야할 수 밖에 없는데, 이런 부분들을 잘 검증하고 대응할 수 있을지에 대한 방법이 있었으면 좋겠다.

## 출처

- [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert)
- [https://ui.toast.com/posts/ko_20220603](https://ui.toast.com/posts/ko_20220603)
- [https://github.com/WICG/inert/issues/58](https://github.com/WICG/inert/issues/58)
- [https://stackoverflow.com/questions/209428/non-standard-attributes-on-html-tags-good-thing-bad-thing-your-thoughts](https://stackoverflow.com/questions/209428/non-standard-attributes-on-html-tags-good-thing-bad-thing-your-thoughts)
- [https://github.com/facebook/react/pull/24730](https://github.com/facebook/react/pull/24730)
