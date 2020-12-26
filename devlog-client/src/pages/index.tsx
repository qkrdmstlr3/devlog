import React from 'react';
import styled, { EmotionStyleType } from '@Style/styled';

const Div = styled.div<EmotionStyleType>`
  background-color: ${(props) => props.theme.BLACK};
`;

function IndexPage(): React.ReactElement {
  return <Div> hello world</Div>;
}

export default IndexPage;
