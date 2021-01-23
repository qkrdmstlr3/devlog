// Dependencies
import React from 'react';
import styled, { EmotionStyleType } from '@Style/styled';

// Hooks
import useList from '@Hooks/pages/usetList';

const Title = styled.h1<EmotionStyleType>`
  padding: 15px;

  font-size: 3rem;
  font-weight: bold;
  text-align: right;
  color: ${(props) => props.theme.BLACK};
`;

function List(): React.ReactElement {
  const { listName } = useList();

  return <Title>{listName}</Title>;
}

export default List;
