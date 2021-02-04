// Dependencies
import React from 'react';
import * as Style from './styled';
import { Link } from 'gatsby';

// Components
import BorderBox from '../BorderBox';

function SelectBox() {
  return (
    <Style.Wrapper>
      <BorderBox height="100%" />
      <Style.NavContainer>
        <BorderBox width="100%" height="100%">
          <Style.Nav>
            <Style.NavItem>싸우기</Style.NavItem>
            <Style.NavItem>글 목록</Style.NavItem>
            <Style.NavItem>포켓몬</Style.NavItem>
            <Style.NavItem>가방</Style.NavItem>
          </Style.Nav>
        </BorderBox>
      </Style.NavContainer>
    </Style.Wrapper>
  );
}

export default SelectBox;
