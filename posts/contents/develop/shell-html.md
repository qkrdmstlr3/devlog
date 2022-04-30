---
title: shell-html DOCS
date: '2021-06-22'
category: develop
summary: React대신 custom-element와 shadowDOM으로 간단한 라이브러리 구현, 배포한 경험에 대한 글
---

## shell-html?

shell-html은 vanillaJS를 이용한 300여줄로 구현된 간단한 라이브러리다. web-component와 shadowDOM을 이용해서 클라이언트의 컴포넌트 개발을 위해 개발되었다. 본 게시글에서는 web-component와 shadowDOM의 구체적인 설명에 대해서는 다루고 있지 않다.

### 계기

작년에 수료한 부스트캠프 과정에서 6주간 vanillaJS만 사용해야하는 과제가 있었다. 그 때 web-component와 shadowDOM을 이용해서 자칭 shellact라고 부르는 간단한 라이브러리를 구현해서 사용하였다(자매품인 shell-router와 shelldux도 있다). 짧은 시간에 구현하였지만 다른 분들의 반응도 좋았고, 작동도 잘 되었는지라 그 때는 만족했었다.

이후 slly라는 프로젝트를 개발하기위해 이런저런 기획을 하고 있던 중 electron위에 react대신 그 때 구현한 shellact를 이용하면 재밌겠다고 생각했고 바로 실행으로 옮겼다. 그런데 막상 구현해보니 리렌더링 폭탄에 아주 난리난리가 났다. 부스트캠프 때는 규모가 작고 간단한 프로젝트라 티가 안나던 것이었다...! 결국 여러 부분에서의 수정 작업을 거쳐야했고 부족하지만 나름 쓸만한 결과물이 나왔다. 만들면서 생각해보니 react를 어느정도 모방하기는 했지만 전체적인 템플릿이 그리 비슷한 것 같지는 않아 shell-html로 이름을 변경하였다.

## 문서

### 컴포넌트 생성

먼저 라이브러리의 근간이 되는 컴포넌트 생성에 대한 코드다.

![shell-html-1](/develop/code/shell-html-1.png)

새로운 컴포넌트를 만들고 싶으면 ShellHTML을 상속받은 클래스를 생성한다. 그런 후 createComponent함수를 통해서 첫 인자로는 태그명을 두 번째 인자로는 만든 클래스를 넘겨주면 된다. 이 때 주의할 점은 태그명사이에는 반드시 '-'가 들어가야 한다.

render함수는 렌더링을 위한 함수이다. return값으로 객체를 넘겨주는데 이 객체는 세 가지 속성을 가진다. html과 css는 말 그대로 html과 css를 의미한다. eventFuncs는 이벤트 함수를 의미하는데 배열에 필요한 이벤트에 대한 정보들을 담아서 전달해주게 된다. 위에 보이는 것과 같이 이벤트를 정할 클래스의 이름, 이벤트의 종류, 이벤트 발생 시 호출될 함수를 넘겨준다. 이렇게 넘겨진 이벤트들은 shadowDOM을 root로 지정해서 event delegation방식으로 관리된다.

shadowDOM의 사용으로 인해 컴포넌트는 렌더링 되었을 때 하나하나가 독자적인 DOM환경을 가진다. 컴포넌트끼리의 css파일은 서로에게 영향을 미치지 않으며, 이 뜻은 서로 다른 컴포넌트라면 css id의 중복이 가능하다는 의미이다. 컴포넌트는 각각이 독자적으로, 캡슐화를 고려해서 document.querySelector등의 외부 접근도 불가능하다.

### 컴포넌트 사용

컴포넌트를 사용하기 위해서는 필요로 하는 곳에서 component를 import하고, 메인이 되는 html파일 또는 다른 컴포넌트의 render의 return html값에 앞서 지정한 태그명을 사용하면 된다. 주의할 점은 컴포넌트 현재 컴포넌트 변경 시 하위 컴포넌트가 새로 만들어지는 것을 방지하기 위해 id값을 지정해주어야한다.

![shell-html-2](/develop/code/shell-html-2.png)

리액트처럼 js의 엔트리 파일에서 아래와 같이 컴포넌트를 렌더링 해줄 수도 있다.

![shell-html-3](/develop/code/shell-html-3.png)

### 컴포넌트 상태 관리

shell-html은 react의 state처럼 자체적으로 state를 제공한다.

![shell-html-4](/develop/code/shell-html-4.png)

state를 사용하기 위해서는 contructor의 super로 state의 초깃값을 넘겨준다. class의 어느곳에서나 this.state를 사용할 수 있으며 this.setState()의 인자로 새로운 값을 넘겨주면 컴포넌트가 리렌더링되고 바뀐 상태를 적용할 수 있게 된다. 만약 setState로 넘겨준 값이 기존 값과 동일하다면 리렌더링은 발생하지 않는다.

### 전역 상태 관리

custom-element에서 제공하는 attributeCallback함수와 observedAttributes함수를 사용하면 리액트의 props처럼 컴포넌트끼리의 인자 전달이 가능하다. 하지만 사용해서 구현해보니 내가 생각한 라이프 사이클과는 흐름이 조금 다르게 구현되어야 했고, props명은 소문자로 되어야 한다거나 원시값만 전달할 수 있다는 한계가 있어 사용을 하지 않는 것으로 결론을 내렸다. 그 대신 자체적으로 전역 상태 관리 솔루션을 제공하기로 했다.

![shell-html-5](/develop/code/shell-html-5.png)

redux보다는 좀 더 간단하게 상태관리를 제공하고 싶었고, recoil의 atom을 만드는 것처럼 구현하면 접근성이 용이해질 것이라고 생각했다. key와 initial값을 가진 객체를 넘겨주기만 하면 쉽게 선언할 수 있다. 이 떄 key값은 서로 중복되면 안되며 이 파일을 js의 엔트리 파일에서 import해주어야 문제없이 사용할 수 있다.

![shell-html-6](/develop/code/shell-html-6.png)

useGlobalState, setGlobalState 함수를 호출해서 전역상태 값을 사용하고 변경할 수 있다. 두 함수 모두 첫 인자로는 사용할 전역변수의 key값이 들어가고, setGlobalState의 두 번째 인자로는 바뀔 상태값이 들어가게 된다. this.setState와 마찬가지로 동일한 값이 들어오면 변경이 일어나지는 않는다.

만약 전역상태가 변경되었을 때 특정 컴포넌트를 리렌더링 시키고 싶다면 connectedCallback과 disconnectedCallback에서 함수를 하나씩 호출해주어야한다. connectedCallback은 컴포넌트가 dom에 붙을 때 호출되는 함수로, enrollObserving함수에 원하는 전역상태의 key값을 넣어 호출하면 해당 전역상태 변경 시 리렌더링이 발생한다. 반대로 disconnectedCallback은 dom에서 제거될 때 호출되는 함수로 releaseObserving으로 감시를 취소해주어야한다. 만약 이 과정이 없다면 컴포넌트가 dom에서 사라지더라도 전역 상태를 관리하는 배열에 남아있어 불필요한 메모리가 사용되기 때문에 두 함수는 반드시 세트로 사용해주는 것이 좋다.

## 마무리하며

### 후기

현재 [slly](https://github.com/qkrdmstlr3/slly)라는 개인 프로젝트를 shell-html을 사용해 개발하고 있다. 개발하며 발생하는 문제점은 지속적으로 보완해나가고 있으며 아직까지는 메모리 누수없이 정상적으로 동작한다. 300줄 내외의 짧은 코드지만 계속해서 발전시켜나가는 재미도 있고 재밌게 개발을 해나가고 있다.

### 아쉬운 점

현재 shell-html에서는 리렌더링 할 때 해당 컴포넌트의 html에 있는 다른 컴포넌트들은 제외하고 나머지 element들은 모두 reflow, repaint하고 있다. virtualDOM을 활용한 리액트의 비교 알고리즘을 찾아보니 `휴리스틱`이라는 매우 복잡한 알고리즘으로 구현되어있는 것 같아 아직은 내가 접근하기는 부족한 부분같다. 그 외에도 여러가지 비교 방식을 생각해보았지만 element가 많아질수록 시간복잡도가 기하급수적으로 증가해 아직 적절한 방법은 찾지 못했다. 혹시 간단하고 효율적인 알고리즘을 알고 계시는 분이 있으시다면 내 [github](https://github.com/qkrdmstlr3)의 email로 답변을 주면 좋겠다. 끗!
