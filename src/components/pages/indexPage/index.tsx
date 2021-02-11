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

function IndexPage() {
  const { loading } = useRecoilValue(gameState);

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
      {/* <SelectBox /> */}
      {loading ? <BorderBox height="35%" /> : <TextBox />}
    </Style.Wrapper>
  );
}

export default IndexPage;
