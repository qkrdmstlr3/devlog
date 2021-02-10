// Dependencies
import React from 'react';
import * as Style from './styled';

// Components
import Pokemon from '../../UI/Pokemon';
import SelectBox from '../../UI/SelectBox';
import TextBox from '../../UI/TextBox';

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
      {/* <SelectBox /> */}
      <TextBox />
    </Style.Wrapper>
  );
}

export default IndexPage;
