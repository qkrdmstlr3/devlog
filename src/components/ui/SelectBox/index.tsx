// Dependencies
import React from 'react';
import { Link } from 'gatsby';
import * as Style from './styled';

// Components
import BorderBox from '../BorderBox';
import { SELECT_OPTION_TYPE } from '../../../hooks/useGame';

interface SelectBoxProps {
  onClickOption: (type: SELECT_OPTION_TYPE) => void;
}

function SelectBox({ onClickOption }: SelectBoxProps) {
  return (
    <Style.Wrapper>
      <BorderBox height="100%" />
      <Style.NavContainer>
        <BorderBox width="100%" height="100%">
          <Style.Nav>
            <Style.NavItem onClick={() => onClickOption('fight')}>싸우기</Style.NavItem>
            <Style.NavItem>
              <Link to="/">글목록</Link>
            </Style.NavItem>
            <Style.NavItem onClick={() => onClickOption('pokemon')}>포켓몬</Style.NavItem>
            <Style.NavItem>가방</Style.NavItem>
          </Style.Nav>
        </BorderBox>
      </Style.NavContainer>
    </Style.Wrapper>
  );
}

export default SelectBox;
