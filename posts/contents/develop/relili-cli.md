---
id: 16
title: React Library Library (with npm)
date: '2022-07-05'
category: develop
summary: cli도구를 만들고 npm에 배포한 경험에 대해 소개합니다
---

빠르게 변화하는 웹 프론트엔드 생태계에서는 새로운 라이브러리들이 계속해서 나온다. 숫자가 점점 늘어남에 따라서 나중에는 어떤 라이브러리가 있었는지가 헷갈리고 사용하고 싶었던 것을 까먹기도한다. React Library Library(이하 `relili`)는 이러한 생각에서 출발했다. 처음에는 단순히 README에 어떤 라이브러리가 있는지 기록하는 것이 목표였고, 주로 사용하는 react를 중심으로 연관된 라이브러리들을 기록하고자 하였다.

차일피일 미루고 있던 중 회사에서 cli를 직접 개발해야할 일이 생겼고, relili를 토이프로젝트로 활용해서 공부한다면 재밌을 것 같아 주말동안 바로 개발에 들어갔다.

## 결과

모으고 있는 라이브러리들의 리스트는 [이곳](https://github.com/qkrdmstlr3/react-library-library)의 README.md에서 볼 수 있다. 개발 중 cli에서 리스트를 보고 싶다면 아래의 명령어로 [relili](https://www.npmjs.com/package/relili)를 전역으로 설치한다.

```
npm i -g relili
yarn global add relili
```

```
relili list
```

이후 위 명령어를 입력하면 README.md의 카테고리 리스트가 나오고, 카테고리를 선택하면 해당 카테고리의 라이브러리들이 보여진다. 라이브러리를 선택하면 깃허브, 공식문서, npm링크가 제공되며 선택을 통해 링크를 열 수 있다. npm또는 yarn으로 라이브러리를 설치하는 기능또한 제공한다. 동작화면은 아래와 같다.

![relili](/develop/images/relili/relili.gif)

리스트를 늘 최신으로 유지시키기 위해서 S3버킷을 사용하였는데, 그 과정은 아래와 같다.

1. README.md에 라이브러리 추가 후 main브랜치에 push
2. Github Action이 동작해 README.md를 파싱한 후 S3버킷의 relili.json 파일을 업데이트
3. relili list 명령어 실행 시 S3버킷에서 최신의 json파일을 가져와서 리스트를 보여준다

[당근마켓의 블로그 글](https://medium.com/daangn/%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93%EC%97%90-%EC%9B%B9-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-1-%ED%8C%8C%EC%9D%BC-%EA%B8%B0%EB%B0%98-%EC%9B%B9%EB%B7%B0-d312b17e697c)에서 간단한 아이디어를 얻었다. Github Action을 통해서 S3버킷의 relili.json을 깃허브의 README.md의 정보와 항상 동일하게 맞춰줄 수 있다.

## 바보같은 짓

파싱 모듈이나 cli모듈을 구현하는 작업은 크게 어렵지 않았다. 오히려 S3와 연동하는 부분에서 가장 많은 시간이 들었다. 처음에는 S3에 접근하려면 secret_key가 필요한 방식을 사용하였는데, 발급받은 secret_key를 env환경변수와 repository의 secret변수로 등록해놓았다. 각각 S3에서 JSON파일을 받아오고, github action으로 JSON파일을 업로드하기 위함이었는데, 이는 참으로 바보같은 짓이었다.

생각을 해보면 .env파일은 private한 정보를 보관하기 위한 목적이고, .gitignore에 추가되며 이는 배포되지 않는다. 즉 패키지를 설치한 곳에서는 .env파일이 없다는 뜻이 되고 S3에서 JSON파일을 받아올 수 없다는 것이다. 이 때문에 S3에 퍼블릭하게 접근이 가능하도록 정책을 설정해주어야했다. 하지만 [S3 Policy Generator에 오류](https://repost.aws/questions/QUjnr5ei9VQm-YpIle6R4UrQ/why-my-s-3-policy-generator-dosent-work)가 있었고 이를 해결하느라 또 시간을 소모하였다(AWS는 완벽할 것이라고 믿었기 때문에 S3 정책 생성기의 오류가 아닌 내 입력에 문제가 있었다고 생각했었다,,,). 결과적으로는 예상한 시간보다 소요가 더 들게 되었다(~~할게 천지인데 말이다~~).

parse함수를 어떻게 구현하였는지나 cli를 어떻게 구현하였는지에 대해서는 [깃허브](https://github.com/qkrdmstlr3/react-library-library)를 참고하거나 구글링을 하면 얼마든지 자료가 나옴으로 여기서 다루지는 않으려한다.

## 향후계획

이후 시간 여유가 생긴다면 아래와 같은 일들을 해보고싶다.

- 테스트 코드 작성
- TypeScript로 마이그레이션
- 여러개의 라이브러리 선택 후 설치 기능

cli를 만들어보는 것이 처음인데 토이프로젝트를 활용해서 재미있게 학습할 수 있었다.
