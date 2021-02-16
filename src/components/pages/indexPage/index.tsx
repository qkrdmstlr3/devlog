// Dependencies
import React from 'react';
import * as Style from './styled';

// Recoil
import { useRecoilValue } from 'recoil';
import { gameState } from '../../../lib/recoil/game';

// Components
import Pokemon from '../../UI/Pokemon';
import SelectBox from '../../UI/SelectBox';
import TextBox from '../../UI/TextBox';
import BorderBox from '../../UI/BorderBox';
import FightBox from '../../UI/FightBox';

function IndexPage() {
  const { loading, gameStatus } = useRecoilValue(gameState);

  return (
    <Style.Wrapper>
      <Style.PokemonContainer>
        <Pokemon name="리액트: L99" isMyPokemon={false} hp={100} icon="react" />
        <Pokemon
          name="리액트: L99"
          isMyPokemon={true}
          hp={100}
          mp={20}
          icon="react"
        />
      </Style.PokemonContainer>
      {loading ? (
        <BorderBox height="35%" />
      ) : gameStatus === 3 ? (
        <SelectBox />
      ) : gameStatus === 4 ? (
        <FightBox />
      ) : (
        <TextBox />
      )}
    </Style.Wrapper>
  );
}

export default IndexPage;
