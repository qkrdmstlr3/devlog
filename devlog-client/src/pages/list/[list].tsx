import React from 'react';
import styled, { EmotionStyleType } from '@Style/styled';
import { useRouter } from 'next/router';

const Title = styled.h1<EmotionStyleType>`
  padding: 15px;

  font-size: 3rem;
  font-weight: bold;
  text-align: right;
  color: ${(props) => props.theme.BLACK};
`;

function List(): React.ReactElement {
  const {
    query: { list },
  } = useRouter();
  return <Title>{list}</Title>;
}

export default List;
