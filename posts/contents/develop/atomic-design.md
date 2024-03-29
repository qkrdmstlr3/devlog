---
id: 8
title: 아토믹 디자인과 테스팅
date: '2021-10-20'
category: develop
summary: 아토믹 디자인 패턴을 사용하며 느낀 생각들과 테스트코드를 함께 도입한 경험에 대한 글
---

## 들어가며

아토믹 디자인 패턴은 한번쯤 사용해보고 싶었던 패턴이었다. 이전에 어줍잖게 사용하려 시도했었지만 무언가 문제가 생겨 포기했었는데 최근에 친구랑 둘이서 `Start Off`라는 프로젝트를 진행했는데 심기일전하여 사용해보기로 했었다. 이번 글에서는 아토믹 디자인 패턴을 사용하며 느낀점과 첫 테스트 커버리지 90%돌파에 대해 이야기해보려한다. 토이프로젝트에서 새운 목표는 다음과 같다.

- TS / 아토믹 패턴으로 체계적인 구조 유지
- 유지보수가 간편하고 통일성있는 코드를 작성
- 테스트 커버리지 80% 이상
- jest / RTL / storybook 사용

## 아토믹 디자인 패턴

### 이란? 왜?

아토믹 디자인 패턴이 어떤 것인지는 구글링을 하면 어어어엄청나게 많은 자료가 나오니 사진 하나만보고 넘어가겠다.

![atomic](/develop/images/atomic-atomic.png)

아토믹 디자인하면 이 그림이 가장 많이 나오지만 가장 확실하게 아토믹 디자인을 설명할 수 있는 그림이라고 생각한다.

처음으로 이 패턴을 알게 된 것은 부스트캠프에서였다. 그 때 당시에는 지도에 초점을 맞춘 프로젝트라 UI적으로 재사용되는 부분이 많지 않았고, 아토믹패턴이 본래의 효율성을 내기는 어려울 것이라 판단해 다른 설계를 사용하였었다. 그렇지만 이 패턴은 컴포넌트 단위로 나누어 구현하는 리액트와 잘 맞겠다는 생각이 들었고, 재사용성을 최대한 살리는 부분도 매력적이라 꼭 한번 사용해보고 싶었다.

### 고민했던 점

개념만 봤을 때는 간단했을 것이라고 생각했다. 디자인에 따라서 적절히 컴포넌트를 나누고 합하면서 정해진 단위로 만들어가면 될 것이라고 생각했다. 그래서 주먹구구식으로 시작했었는데 시간이 지나면서 두 가지 문제가 발생했다.

첫 번째는 `스타일의 제한`이었다. 이것은 처음 디자인 설계부터가 문제를 일으켰다고 볼 수 있다. 간단하게 디자인틀만 잡고 구현을 시작하였는데, 구현하다보니 Atom이 다양한 방면으로 만들어져야할 필요가 있었다. 버튼을 예로 들면 Icon이 필요할 경우, form의 버튼일 경우, 상황에 따른 여러가지 크기를 고려하는 등 많은 조건을 필요로 하였다. 두 번째 문제로는 `props 관리`였다. 상태관리를 하는 props를 전달할 때, atom.molecule같은 경우 재사용성이 높은 컴포넌트들로 구성되어 있어서 redux나 contextAPI같은 전역상태를 적용하기에는 설계상 무리가 있었다. 그렇다고 최상위인 pages부터 atom까지 이벤트를 내려주기에는 과도한 props drilling이 일어날 문제가 있었다.

### 고민의 결과

첫 번째 문제를 해결하기 위해서는 디자인의 재정립이 필요했다. 기존에 구성된 더미 디자인을 바탕으로 좀 더 구체적이게 디자인을 잡았다. ( 이 과정에서 디자이너가 정말 중요하다는 것을 또 한번 느꼈다...)

잡은 디자인을 바탕으로 Atom, Molecule 등 재사용이 가능하도록 단위를 나누었고, 특히 Atom에서는 size나 theme이라는 enum을 props로 지정해주어 좀 더 다양한 스타일을 설정할 수 있도록 해주었다. 덕분에 다양한 스타일을 만들면서 디자인적으로 통일성을 유지할 수 있었다. Storybook을 이용해서 Bottom-Up방식으로 만들어진 컴포넌트들의 UI테스트를 하며 프로젝트를 진행하였다.

![storybook](/develop/images/atomic-storybook.png)

두 번째 문제로 인해서 이런저런 고민들을 해보다 atomic에 대한 여러가지 문서들을 찾아보게 되었다. 애초에 얕은 지식만으로 하나의 디자인 패턴을 도입하려 했던 것이 패착이었다. 영문글까지 여러 문서들을 찾아보며 나름대로 정립한 기준은 다음과 같다.

- 재사용성을 높이기 위해 Atom. Molecule은 전역상태를 가지지 않는다.
- Organism은 전역상태를 가질 수 있지만 권장되지는 않는다.
- Template은 기본적인 디자인의 구조에 초점을 맞춘다.
- UI와 관련된 것들은 Page에서 Template으로 전달된다.

이전에는 Organism까지 재사용을 하려고 열심히 짱구를 굴려보았는데, Organism은 이미 하나의 유기체로 역할을 함으로 재사용이 거의 불가능하며 동일한 역할을 하지않는이상 분리하는 것을 권장한다고 한다. Page와 Template에 어떤 차별점을 두어야할지도 궁금하였는데, 가변적으로 변하는 데이터(UI)의 경우에는 pages에서 props로 전달을 하는 방식이라는 것도 알게되었다. 따라서 put/delete등의 api는 template에서 구현을 하였고, get요청은 page에서 구현해 넘겨주었다. atom과 molecule이 온전히 재사용에만 집중됨으로서 props drilling같은 문제도 어느정도로는 해결되었다고 생각한다.

![startoff](/develop/images/atomic-startoff.png)

물론 온전히 해결하지 못한 문제점도 있다. 바로 문제의 원흉이었던 디자인이다. 아토믹 패턴의 중요성에 디자인이 큰 자리를 차지하고 있다는 것을 알고있었지만 직접 구현을 해보면서 더 크게 와닿았다. 위의 이미지를 보면 간격같은 부분들이 조금씩 어색해보이는 것이 있다. 만약 디자이너분이 계셔서 어떤 식으로 디자인 설계를 할지를 논의한 후, 좀 더 체계적으로 컴포넌트들을 나누었다면 훨씬 깔끔한 UI를 구현할 수 있을 것이라고 생각한다. 여담이지만 아무리 만져도 여기저기가 어색해보이는 것은 어쩔 수 없드라.. 디자이너가 정말 대단하다고 생각했다.

## 단위테스트

![test-tsx](/develop/images/atomic-test-tsx.png)

맨날 말로만 들어오던 테스트코드를 이번 기회에 제대로 사용해보고자하는 것이 나름대로의 목표였다. atomic으로 나뉘어진 덕분에 테스트의 단위가 명확하게 나누어진다고 느꼈고 덕분에 테스트의 범위를 나누기에 수월한 느낌이 있었다. 컴포넌트 이외에도 사용되는 util파일들에 대한 테스트코드도 작성하였다.

```tsx
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const AllTheProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <div id="modal" />
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRenderer as render };
```

redux, routing, api통신등 의존성 있는 부분이 많아 환경설정에 조금 시간이 걸렸다. 우선 jest에서 렌더링을 위해 redux와 routing이 설정된 `test-utils`라는 render모듈을 만들어 사용을 하였고, RTL(React-testing-library)를 사용해서 컴포넌트 렌더링 테스트를 진행하였다. api는 단위테스트에서는 jest에서 지원하는 `mockup api`를 사용하였고, storybook에서는 `axios-mock-adapter`라는 라이브러리를 사용하여 목업요청을 만들어주었다.

![test](/develop/images/atomic-test.png)

최종적으로는 본래 목표로 삼았던 80%보다 높은 90%의 테스트 커버리지를 보이고 있다.

### 부족한 점

테스트 커버리지를 높이는데는 성공하였지만, 테스트 코드 자체는 그다지 깔끔하지는 못하다고 생각한다. 이것저것 찾아보면서 하느라 초반의 테스트 코드와 후반의 테스트 코드에 사용된 RTL api들이나 설계들이 조금씩 다르다. 첫 술에 배부를 수 없는 법이라고 앞으로 작성할 테스트 코드들도 계속해서 공부하며 구현하다보면 조금씩 발전할 수 있을것이라고 생각한다.
