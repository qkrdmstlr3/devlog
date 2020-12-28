// Dependencies
import React, { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import * as Style from './styled';

// Utils
import ReactShadowDom from '@Utils/ReactShadowDom';

const dummyPost = {
  id: 1,
  title: 'Webpack에 관하여1',
  createdAt: '2020-12-31',
  content: '# Webpack에 관하여1',
};

function BottomList(): React.ReactElement {
  const {
    query: { post },
  } = useRouter();
  const contentRef = useRef<any>();

  return (
    <>
      <Style.Header>
        <Style.Title>{dummyPost.title}</Style.Title>
        <Style.Date>/ {dummyPost.createdAt}</Style.Date>
      </Style.Header>
      <Style.ContentContainer ref={contentRef}>
        <ReactShadowDom parentDom={contentRef}>
          <ReactMarkdown>{dummyPost.content}</ReactMarkdown>
        </ReactShadowDom>
      </Style.ContentContainer>
    </>
  );
}

export default BottomList;
