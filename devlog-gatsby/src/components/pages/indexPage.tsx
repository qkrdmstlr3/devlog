// Dependencies
import React from 'react';
import * as Style from './styled';

// Components
import Pokemon from '../UI/Pokemon';
import BorderBox from '../UI/BorderBox';

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
      <BorderBox height="30%">
        앗! 야생의 <br />
        리액트(이)가 나타났다!
      </BorderBox>
    </Style.Wrapper>
  );
}

export default IndexPage;
