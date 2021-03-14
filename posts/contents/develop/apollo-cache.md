---
title: NextJS & Apollo사용과 cache관리에 대하여
date: '2021-02-20'
category: develop
---

## 들어가며

부스트캠프 동안 많은 팀들이 apollo와 graphql을 사용하는 것을 보았다. 한번쯤은 사용해보면 좋겠다 싶어 이번 기회에 도입해보기로 했다. 새로운 기술을 익히는 것을 좋아하는 편이라 nextJS도 같이 사용하게 되었다. 이 글은 nextJS와 apollo를 같이 쓰는 방법과 구현 중 생긴 의문점에 대해서 나름의 고민을 해본 결과를 기술한다(추측성 결론이라서 정확하지 않을 수 있습니다😅. nextJS의 사용법에 대해서는 다루지 않습니다).

코드는 nextJS공식 github [예제](https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js)를 참고해서 구현하였다.

## 1. next js에서 apollo 사용하기

### 연결하기

apollo의 사용을 위해서 `@apollo/client`라는 라이브러리를 이용하였다.

이것을 사용하면 서버에서 query를 통해 데이터를 가져올 수 있으며 가져온 정보는 캐시에 저장된다. 같은 요청을 보낼 경우 캐시에 있는 내용이라면 서버에 요청을 보내는 대신 캐시에서 데이터를 가져오게 된다. db에 추가하거나 수정하는 mutation이 실행될 때 cache를 업데이트 시킴으로서 최신상태를 유지하도록 도와주기도 한다.

apollo를 사용하기 위해서는 먼저 apolloClient라는 객체를 만들어야 한다. [여기](https://github.com/qkrdmstlr3/devlog/blob/d1a1df6e2b74b30e2c837f254e1c946d14c62483/devlog-client/src/libs/apolloClient.ts)에 코드가 있다.

apolloClient파일을 만든 후에는 최상단 파일인 \_app.tsx에서 apolloClient객체를 next js에 연결시켜주게 된다.

```jsx
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@~/apolloClient';

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
```

이렇게 함으로써 모든 컴포넌트에서의 Graphql API사용이 가능해진다.

### 사용하기

`@apollo/client` 라이브러리는 react를 위해서 조금 더 편리하게 쓸 수 있게 해주는 hook을 제공한다.

데이터 조회에 사용되는 `useQuery` 와 데이터 생성, 변경에 사용되는 `useMutation` 등이 있고, 사용법은 다음과 같다.

```jsx
import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS_QUERY = gql`
  query {
    posts {
      id
      content
    }
  }
`;

function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY);

  if (loading) return <span>Loading...</span>;

  return (
    <ul>
      {data.posts.map(({ id, content }) => (
        <li key={id}>{content}</li>
      ))}
    </ul>
  );
}

export default PostList;
```

gql을 이용해서 query문을 작성하고 useQuery를 이용해서 서버에 요청을 보내면 데이터를 가져올 수 있다. useMutation을 사용하면 서버에 데이터를 변경하는 요청을 보내는 것도 가능하다.

[공식문서](https://www.apollographql.com/docs/react/data/queries/)

## 2. next js에서 ssr하기

### 어떻게 할까??

ssr을 위해서 next js에서는 getServerSideProps라는 함수를 지원한다.

[공식문서](https://nextjs.org/docs/basic-features/data-fetching)

이 함수는 다음과 같이 사용가능하다.

```jsx
function components({ data }) {
	return <div>{data}</div>
}

export const getServerSideProps = async (context) => {
  const data = await fetch(...);

  return {
    props: {
			data
		},
  }
}
```

매 요청마다 서버에서 데이터를 가져오게 되고, 가져온 데이터를 props로 넘겨주게 됩니다. 그러면 component는 props를 받아서 사용가능해지는 것이다.

getServerSideProps는 서버에서 실행되어진다. 따라서 document등의 로직은 피하는 것이 좋다.

### apollo를 이용해서 데이터 가져오기

위에 처럼 getServerSideProps내부에서 useQuery를 사용해 데이터를 가져오고 싶지만 그러기엔 문제가 있다.

react component밖에서 hook을 호출하게 되면 Invalid hook call에러가 발생하게 된다. 대신 다음과 같은 방법으로 데이터를 가져올 수 있다.

```jsx
import { initializeApollo } from '@~/apolloClient';
import GET_POST_QUERY from '@~/getPost.query';

export const getServerSideProps = async (context) => {
  const apolloClient = initilizeApollo();

  const { data } = await apolloClient.query({
    query: GET_POST_QUERY,
    variables: {
      postId: Number(post),
    },
  });

  return {
    props: {
      data,
    },
  };
};
```

아까전에 만들어둔 apolloClient.ts안에서 initilizeApollo()함수로 apolloClient객체를 가져온 뒤 거기서 query함수를 통해서 서버에서 데이터를 가져올 수 있게 되고, return된 값은 Component의 props로 전달된다.

그런데 여기서 하나의 문제점이 발생했다.

## 문제 발생

![apolloclient-cache](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/apolloclient-cache.png)

![hook-cache](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/hook-cache.png)

첫 번째 이미지는 apolloClient의 query함수를 이용한 뒤 출력한 cache정보이다. 두 번째는 query실행 뒤 useMutation을 이용해서 출력해본 cache정보이다.

list정보와 ManyPost라는 데이터를 apollo hooks를 이용해서 가져왔고, OnePost는 apolloClient 객체를 이용해서 가져왔다. 그리고 출력결과 두 개가 따로 출력된 것을 확인할 수 있었다.

왜 이렇게 되는지는 잘 모르겠지만, 두 방식(apolloClient로 query를 호출하는 방식과 useMutation으로 query를 호출하는 방식)이 각각 다른 cache 저장소를 가지는 것으로 추측해보았다. 다시 말하면 apollo hook을 사용하는 방식과 apolloClient를 사용하는 방식이 따로 동작한다는 것이다. 이렇게 됬을 때 문제는 다른 곳에서 useQuery를 이용해서 서버에 post 데이터를 요청시, 이미 apolloClient의 query로 캐시한 적이 있음에도 불구하고 다시 한 번 요청을 보낼 수 밖에 없게 된다.

아직 두 개의 cache를 하나로 합쳐서 구현하는 방법은 찾아내지 못했지만 아래와 같은 방법을 이용하면 한쪽으로 합치는 것이 가능하다.

### 해결 방법

```jsx
import { initializeApollo, addApolloState } from '@~/apolloClient';
import GET_POST_QUERY from '@~/getPost.query';

export const getServerSideProps = async (context) => {
  const apolloClient = initilizeApollo();

  const { data } = await apolloClient.query({
    query: GET_POST_QUERY,
    variables: {
      postId: Number(post),
    },
  });

  return addApolloState(apolloClient, {
    props: { data },
  });
};
```

return할 때 apolloClient.ts파일에서 구현한 addApolloState함수를 가져와서 사용하였다. 이 함수의 내부는 다음과 같다.

```jsx
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}
```

pageProps에 전달한 client의 캐시정보를 담아둔다. 그렇게 한 후, 위와 동일한 과정을 실행시켜보면

![hook-cache-with-apolloclient](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/hook-cache-with-apolloClient.png)

OnePost와 ManyPost가 같이 캐시에 들어있는 것을 확인할 수 있게 된다. 물론 apolloClient쪽의 캐시 저장소는 그대로 유지되게 된다. apolloClient의 정보를 한 쪽으로 복사시켜서 보낼 수 있게 되는 것 같다. 그런데 어떻게 pageProps로 캐시정보를 넣는 것이 다른 저장소에 적용이될까를 한번 추측해 보았다.

```jsx
// _app.tsx
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@~/apolloClient';

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
```

이 코드는 next js와 apollo를 연동하는 부분이다.

처음에 _app.tsx에서 useApollo로 apolloClient라는 객체를 만들 때 pageProps라는 것을 전달해주게 된다. 이것이 pageProps의 _**APOLLO_STATE**\_로 새로운 값이 들어오면 apollo hooks의 캐시저장소와 비교해서 추가하는 방식일 것이라고 추측해본다.

좀 더 자세한 사항하게 알기 위해서는 전달해주는 pageProps가 어떤 역할을 하는지에 대해서 알아보면 좋을 것 같다.

혹여 제가 잘못알고 있는 사실이 있으면 메일 주시면 감사합니다.

현재는 gatsby를 사용해서 리팩토링을 한 상태임으로 저장소는 [여기](https://github.com/qkrdmstlr3/devlog/tree/d1a1df6e2b74b30e2c837f254e1c946d14c62483)를 참고 부탁드립니다!
