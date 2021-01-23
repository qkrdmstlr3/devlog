// Dependencies
import React from 'react';
import * as Style from './styled';

// WysiwygEditor
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from 'next/dynamic';
import { ViewerProps } from '@toast-ui/react-editor';

// Utils
import getDateFormat from '@Utils/dateFortmat';

// Graphql
import { initilizeApollo, addApolloState } from '@Libs/apolloClient';
import GET_POST_QUERY from '@Graphql/post/query/getPost.mutation';

// Hooks
import usePost from '@Hooks/pages/usePost';

interface PostType {
  id: number;
  content: string;
  title: string;
  createdAt: string;
}
interface BottomListProps {
  data: {
    getPost: PostType;
  };
}

function BottomList({ data }: BottomListProps): React.ReactElement {
  const { contentRef } = usePost();
  const Viewer = dynamic<ViewerProps>(
    () => import('@toast-ui/react-editor').then((m) => m.Viewer),
    { ssr: false }
  );

  return (
    <>
      <Style.Header>
        <Style.Title>{data?.getPost.title}</Style.Title>
        <Style.Date>/ {getDateFormat(data?.getPost.createdAt)}</Style.Date>
      </Style.Header>
      <Style.ContentContainer ref={contentRef}>
        <Viewer initialValue={data?.getPost.content} />
      </Style.ContentContainer>
    </>
  );
}

interface SSRType {
  query: {
    [name: string]: string;
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps = async ({ query }: SSRType) => {
  const apolloClient = initilizeApollo();
  const { post } = query;

  // 이걸로 보내는 요청은 qs로 전달되게 되는 것 같다
  const { data } = await apolloClient.query({
    query: GET_POST_QUERY,
    variables: {
      postId: Number(post),
    },
  });

  /**
   * apolloClient를 사용해서 만든 캐시와 hook사용해서 만든 캐시의 저장소 공간이 다른 것 같다.
   * 아래와 같이 addApolloState를 이용하면 pageProps에 조회한 post가 들어가게 되고,
   * hook을 사용하는 cache가 그것을 읽어서 저장하는듯..?
   * return { props: { data }}를 할 경우에는 hook을 사용하는 cache에는 저장되지 않는다
   * useApollo(pageProps)로 초기화를 했었는데, 그 과정에서 pageProps로 들어간 친구들이 있으면
   * hook을 사용하는 cache저장소에 추가적으로 집어넣는듯하다.
   */
  return addApolloState(apolloClient, {
    props: { data },
  });
};

export default BottomList;
