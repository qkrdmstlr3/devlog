import React from 'react';
import styled, { EmotionStyleType } from '@Style/styled';

const Title = styled.h1<EmotionStyleType>`
  padding: 15px;

  font-size: 3rem;
  font-weight: bold;
  text-align: right;
  color: ${(props) => props.theme.WHITE};
`;

const TITLE = '조개소년 개발 블로그';

function IndexPage(): React.ReactElement {
  return <Title>{TITLE}</Title>;
}

export default IndexPage;
