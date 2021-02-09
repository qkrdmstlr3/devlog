---
title: React에서 shadowDOM사용하기
date: '2021-02-10'
category: develop
---

## 들어가며 & 문제발생

개발 블로그를 만들면서 겪었던 문제와 그것을 해결한 방법에 대해서 정리해보았다.

개발 블로그를 개발할 때 스타일링을 위해서 css-in-js중 하나인 emotionJS를 사용하였다. 추가적으로 기본적으로 설정된 스타일을 초기화하기 위해서 `emotion-reset`이라는 패키지를 사용하였다. 아래 코드는 emotion-reset을 사용해서 스타일을 초기화한 코드의 일부분이다.

```jsx
import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

function GlobalStyle(): React.ReactElement {
  return (
    <Global
      styles={css`
        ${emotionReset}

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button,
        button:active {
          outline: none;
          cursor: pointer;
        }

        input:focus {
          outline: none;
        }
      `}
    />
  );
}

export default GlobalStyle;
```

나는 gatsby에서 지원하고 있는 markdown으로 페이지를 만드는 방법을 사용해서 게시글을 만들었는데, markdown을 html tag로 파싱하기 위해서 `react-markdown`이라는 패키지를 사용하였다. 여기서 문제가 발생하였는데, emotion-reset으로 적용된 스타일 초기화가 markdown에서 파싱된 html tag에도 그대로 반영이 되버린다는 것이었다. 모든 태그의 글자 크기가 똑같이 나오는 현상이 나타났고, markdown 문법도 정상적으로 동작하지 않는 것처럼 보였다.

---

## 해결 방법

제일 먼저 생각난 방법은 두 가지였다. 첫 번째 방법은 emotion-reset을 사용하지 않는 것. 그러면 기존에 초기화된 스타일이 적용된 부분을 다시 스타일링 해주어야하는 불편함이 있어 보류하였다. 두 번째는 markdown을 위한 스타일 전부를 새로 정의해주는 것. 아래 코드와 같이 emotion-js를 이용해서 react-markdown태그를 감쌀 새로운 태그를 만들고, 새로 만들어진 태그에 scss문법으로 markdown 태그에 대한 정의를 모두 다시 해주는 방식이었다.

```javascript
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

const MarkdownStyle = styled.div`
  h1 {
    font-size: 2rem;
  }
  ...
`;

function Component(props) {
  return (
    <MarkdownStyle>
      <ReactMarkdown source={props.content} />
    </MarkdownStyle>
  );
}
```

하지만 일일히 모든 태그를 다시 정의해주는 부분이 맘에 들지 않았고, 귀찮기도 했음으로 이 방식도 보류하였다. 그러다 생각난 세 번째 방식은 부스트캠프 활동 중에 터득한 shadowDOM을 사용하는 것이었다. shadowDOM아래는 독자적인 환경을 가지기 때문에 emotion-reset의 영향을 받지 않을 것이라고 생각하였다. 본격적인 해결 방법을 설명하기 전에 우선 shadowDOM에 대해 간단한 설명이 필요할 것 같다.

### shadowDOM이란?

shadowDOM의 역할을 간단하게 설명하자면 하나의 `독자적인 환경`을 가질 수 있도록 해준다고 볼 수 있다. 좀 더 쉽게 말하면 외부(부모 태그 등)의 css style은 적용되지 않게 되며 독자적인 css환경을 가지게 된다. 사용법은 매우 간단한데, 아래와 같이 원하는 html태그에서 attachShadow함수를 호출하기만 하면 된다. 그러면 아래 사진과 같이 태그 아래에 `shadow-root`라는 녀석이 생기게 된다.

```javascript
DOM.attachShadow({ mode: 'close' });
```

![shadowDOM](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/shadowDOM-1.png)

shadow-root 아래에 새로운 태그를 달고 싶을 때는 다음과 같이 할 수 있다.

```javascript
const div = document.querySelector('div');
div.attachShadow({ mode: 'open' });
div.shadowRoot.innerHTML = `<div>hello</div>`;
```

shadowRoot가 독자적인 환경을 가진다는 것은 아래의 사진을 참고하면 쉽게 확인할 수 있다. div의 배경색을 빨강색으로 지정해놓았는데, 개발자 도구로 본 결과 shadowRoot외부의 div에는 background속성이 있지만 shadowRoot내부의 div에는 background속성이 없는 것을 확인할 수 있다.

![shadowDOM](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/shadowDOM-2.png)

shadowDOM의 역할은 독립된 css환경 구축뿐만이 아니다. shadowDOM은 더 나아가 DOM 자체를 분리하는 역할을 한다. 그렇기 때문에 서로 다른 shadowDOM이라면 id를 중복 사용하는 것이 가능해진다. 효율적으로 shadowDOM을 사용할 수 있게 된다면, 더 이상 id의 중복 사용을 걱정 할 필요는 없을 것이다.

### 문제 해결

이렇게 독자적인 환경을 가질 수 있는 shadowDOM아래에 마크다운이 파싱된 html태그들을 놓는 방식을 사용해 앞선 문제를 해결해보자.

방식은 props로 A(`shadowDOM 아래에 붙일 Element`)와 B(`shadowDOM이 붙을 Element`)를 받는 util컴포넌트를 만든다. 이 컴포넌트는 B에 shadowDOM을 붙히고 그 아래에 A를 붙히는 역할을 해준다. 코드는 다음과 같다.

```tsx
/** ReactShadowDom.tsx */
import React, { useState, useEffect, RefObject } from 'react';
import ReactDom from 'react-dom';

interface ReactShadowDomProps {
  children: React.ReactNode;
  parentDom: RefObject<HTMLDivElement>;
}

function ReactShadowDom({
  children,
  parentDom,
}: ReactShadowDomProps): React.ReactElement {
  const [container, setContainer] = useState<any>(undefined);

  useEffect(() => {
    if (!parentDom || parentDom.current?.shadowRoot) {
      return;
    }

    setContainer(parentDom?.current?.attachShadow({ mode: 'open' }));
  }, [parentDom]);

  if (!container) {
    return <></>;
  }

  return ReactDom.createPortal(children, container);
}

export default ReactShadowDom;
```

다음과 같이 사용하면 `props.content`는 독자적인 환경을 가질 수 있다.

```tsx
// Dependencies
import React, { useRef } from 'react';
import ReactMarkdown from 'react-markdown';

// Utils
import ReactShadowDom from '@Utils/ReactShadowDom';

function Component(props): React.ReactElement {
  const { contentRef } = useRef();

  return (
    <div ref={contentRef}>
      <ReactShadowDom parentDom={contentRef}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </ReactShadowDom>
    </div>
  );
}
```

이렇게 `emotion-reset`으로 인해서 모든 스타일이 초기화되는 문제를 `shadowDOM`을 이용해서 해결할 수 있었다.

---

## 마치며

옛날에 shadowDOM과 custom-element를 이용해서 vanillaJS로 개발을 할 때, react를 쓰면서도 이러한 것을 쓰게 될 일이 있을까? 라는 생각을 한 적이 있었다. 이번 기회에 사용할 일이 생기게 되었고, 나름 재미있게 문제를 해결할 수 있어서 재미있는 경험이 된 것 같다.

앞으로 전공 공부를 할 때에도, 배운 것을 내가 지금 만들고 있는 것에 어떻게 적용하면 좋을까? 라는 생각을 가지고 한다면 좀 더 재밌게 공부할 수 있지 않을까??😁
