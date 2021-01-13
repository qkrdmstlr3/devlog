// Dependencies
import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as Style from './styled';

// Utils
import ReactShadowDom from '@Utils/ReactShadowDom';
import getDateFormat from '@Utils/dateFortmat';

// Graphql
import { initilizeApollo, addApolloState } from '@Libs/apolloClient';
import GET_POST_QUERY from '@Graphql/post/query/getPost.mutation';

// Hooks
import usePost from '@Hooks/pages/usePost';

function BottomList(): React.ReactElement {
  const { contentRef, loading, data } = usePost();

  if (loading) return <></>;
  return (
    <>
      <Style.Header>
        <Style.Title>{data?.getPost.title}</Style.Title>
        <Style.Date>/ {getDateFormat(data?.getPost.createdAt)}</Style.Date>
      </Style.Header>
      <Style.ContentContainer ref={contentRef}>
        <ReactShadowDom parentDom={contentRef}>
          <ReactMarkdown>{data?.getPost.content}</ReactMarkdown>
        </ReactShadowDom>
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

  await apolloClient.query({
    query: GET_POST_QUERY,
    variables: {
      postId: Number(post),
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default BottomList;
