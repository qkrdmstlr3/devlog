// Dependencies
import React from 'react';
import * as Style from './styled';
import { Link } from 'gatsby';

// Recoil
import { useRecoilState } from 'recoil';
import { gameState } from '../../../lib/recoil/game';

// Components
import BorderBox from '../BorderBox';

function SelectBox() {
  const [recoilGameState, setGameState] = useRecoilState(gameState);

  const fightClickHandler = () => {
    setGameState({
      ...recoilGameState,
      gameStatus: 4,
    });
  };

  const pokemonClickHandler = () => {
    setGameState({
      ...recoilGameState,
      isPokemonListOpen: true,
    });
  };

  return (
    <Style.Wrapper>
      <BorderBox height="100%" />
      <Style.NavContainer>
        <BorderBox width="100%" height="100%">
          <Style.Nav>
            <Style.NavItem onClick={fightClickHandler}>싸우기</Style.NavItem>
            <Style.NavItem>
              <Link to="/list">글목록</Link>
            </Style.NavItem>
            <Style.NavItem onClick={pokemonClickHandler}>포켓몬</Style.NavItem>
            <Style.NavItem>가방</Style.NavItem>
          </Style.Nav>
        </BorderBox>
      </Style.NavContainer>
    </Style.Wrapper>
  );
}

export default SelectBox;
