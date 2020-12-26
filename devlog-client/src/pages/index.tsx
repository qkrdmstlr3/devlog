import React from 'react';
import styled from '../common/style/styled';

const Div = styled.div`
  background-color: black;
`;

function IndexPage(): React.ReactElement {
  return <Div> hello world</Div>;
}

export default IndexPage;
