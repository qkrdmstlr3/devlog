// Dependencies
import React from 'react';
import * as Style from './styled';

// Components
import Pokemon from '../../UI/Pokemon';
import BorderBox from '../../UI/BorderBox';
import SelectBox from '../../UI/SelectBox';

function IndexPage() {
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
      <SelectBox />
    </Style.Wrapper>
  );
}

export default IndexPage;
