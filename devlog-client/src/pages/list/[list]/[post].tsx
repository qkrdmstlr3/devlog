// Dependencies
import React from 'react';
import { useRouter } from 'next/router';
import * as Style from './styled';

const dummyPost = {
  id: 1,
  title: 'Webpack에 관하여1',
  createdAt: '2020-12-31',
  content: '**Webpack에 관하여1**',
};

function BottomList(): React.ReactElement {
  const {
    query: { post },
  } = useRouter();

  return (
    <>
      <Style.Header>
        <Style.Title>{dummyPost.title}</Style.Title>
        <Style.Date>/ {dummyPost.createdAt}</Style.Date>
      </Style.Header>
      <Style.ContentContainer>{dummyPost.content}</Style.ContentContainer>
    </>
  );
}

export default BottomList;
