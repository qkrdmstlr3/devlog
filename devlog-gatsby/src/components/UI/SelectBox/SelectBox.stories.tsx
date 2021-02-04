import React from 'react';
import styled from '../../../common/style/styled';
import SelectBox from '.';

export default {
  title: 'Box/SelectBox',
  component: SelectBox,
};

const StyleWrapper = styled.div`
  height: 100vh;
`;

export const selectBox = () => (
  <StyleWrapper>
    <SelectBox />
  </StyleWrapper>
);
