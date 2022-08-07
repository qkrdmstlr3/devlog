---
id: 17
title: yarn berry의 pnp 문제 해결
date: '2022-07-09'
category: develop
summary: yarn berry의 zero install과 관련된 .pnp의 문제해결에 대한 글
---

당근마켓 썸머테크인턴쉽을 시작한지 어연 10일 남짓이 되었다. 회사에서 모노레포와 yarn berry를 사용해서 사내에 존재하는 문제를 해결하기 위한 프로젝트를 시작하게 되었는데 이 글은 그 과정에서 발생한 문제에 대해서 다룬다.

## 문제

당시 프로젝트의 파일 구조를 재현하면 아래 구조와 비슷하다

```
home
ㄴ .yarn
ㄴ folder_1(monorepo)
    ㄴ .yarn
    ㄴ folder_2(package)
        ㄴ index.ts
        ㄴ package.json
    ㄴ .pnp.cjs
    ㄴ .pnp.loader.mjs
    ㄴ .yarnrc.yml
    ㄴ packagejson
ㄴ .pnp.cjs
```

folder_1이 모노레포로 관리되고 있었고 folder_2가 패키지 폴더 중 하나였다. 문제는 folder_2에서 `yarn build` 명령어를 실행하면서 생긴 에러에서 시작되었다.

![error01](/develop/images/pnp/pnp-error01.png)

모노레포와 yarn berry를 사용한 경험이 처음이었어서 처음에는 설정을 잘못한 줄 알고 여기저기를 마구잡이로 뒤졌다.

한참을 뒤지던 중 에러메시지가 눈에 띄었는데 홈디렉토리의 .yarn에는 install-state.gz파일이 없었지만 현재 프로젝트 폴더(folder_1)에는 .yarn의 install-state.gz가 있다는 것이었다. 호기심에 파일을 복사해서 붙여넣은 다음 실행하니 에러문구가 바뀌었다.

![error02](/develop/images/pnp/pnp-error02.png)
에러 문구가 바뀌는 것을 보고 홈디렉토리의 .yarn으로 기준이 잡혀서 실행된다고 생각했고, yarn을 실행할 때 상대경로를 설정하는게 있나? yarn에 환경설정을 해주어야하나?하는 생각이 들었고 열심히 구글링을 했으나 유의미한 답변을 듣지는 못했다,,,

npm과 brew로 각각 yarn을 지우고 깔아보는 등의 시도를 했지만 변하는 건 없었고, 00시가 넘어가 nodeJS를 삭제해야겠다는 마음을 먹었을 무렵 퇴근하려는 동료 두 분이 방문해주셨다. 그리고 "이거 그거지 않나요??"를 내뱉으시면서 문제를 5분만에 해결해버리셨다.

## 해결

![error03](/develop/images/pnp/pnp-home.png)

당시 내 홈 디렉토리의 구조이다. 결과부터 말하자면 여기서 .pnp.cjs, .pnp.loader.mjs, package.json을 지우니 해결이 되었는데, 이후 집에가서 좀 더 문제를 뜯어보니 홈디렉토리의 .pnp.cjs파일이 문제가 되는 것이었다.

왜 이런 에러가 발생했는지를 간단히 설명하자면, yarn berry는 zero install을 지원하는데 zero install은 .yarn의 .cache폴더에 zip파일로 라이브러리들을 다운받게 되고, 그것을 .pnp.cjs에 의존성 자료구조로 만들어놓는다. 라이브러리를 사용할 시 .pnp.cjs가 실행되고 .cache폴더에서 찾아와 실행하게 된다. 즉 프로젝트 폴더(folder_1)의 .pnp.cjs가 아닌 홈 디렉토리의 .pnp.cjs가 실행되었기 때문에 문제가 발생한 것이었다. 보다 상위 폴더를 탐색한 뒤 가장 상위에 있는 .pnp.cjs파일을 실행한다고 보면 되겠다.

문제를 해결해주신 동료분에 따르면 모노레포와 연관이 있다고 한다. yarn berry는 모노레포의 workspace를 지원하는데, 모노레포의 workspace 각각에서 스크립트 실행이 가능하도록 하고 있다. 따라서 workspace에 설치된 라이브러리의 정보가 없다면 경로를 거슬러 올라가 프로젝트 루트 폴더(folder_1)의 .yarn/.cache에서 찾는다는 것이다. 이는 yarn명령어를 실행 시 자신보다 상위 폴더를 탐색한다는 뜻이고 그 과정에서 가장 상위의 .pnp.cjs파일을 실행한다는 것이다.

## 결론

결론적으로는 상위 폴더에 있는 .pnp.cjs파일이 높은 우선순위를 가지게되고, yarn이 하위에서 상위로 훑으면서 .pnp.cjs를 탐색하기에 발생하는 문제였다. 그래서 프로젝트 폴더(folder_1)보다 상위폴더인 홈디렉토리의 .pnp.cjs를 제거하니 해결된 것이었다.

비록 에러를 해결하는데 많은 시간을 잡아먹었지만, 그 덕분에 yarn berry와 zero install, pnp에 대한 이해도를 높일 수 있는 기회가 되었고, 이 문제를 매달 진행하는 네트워킹 데이의 `삽질 공유 시간`에 같은 조원들과 공유할 수 있었다

이에 대한 문제가 원래 발생하는지, 어떻게 생각하는지에 대한 질문을 [yarn/berry의 깃허브에 이슈](https://github.com/yarnpkg/berry/issues/4613)로 남겨두었다.
