// Dependencies
import React from 'react';
import * as Style from './styled';

// Components
import Pokemon from '../UI/Pokemon';
import BorderBox from '../UI/BorderBox';

function IndexPage(props) {
  return (
    <Style.Wrapper>
      <Pokemon name="리액트: L99" isMyPokemon={false} hp={100} icon="react" />
      <Pokemon
        name="리액트: L99"
        isMyPokemon={true}
        hp={100}
        mp={20}
        icon="react"
      />
      <BorderBox height="200px">앗! 야생의 뭐시기가 나타났다!</BorderBox>
    </Style.Wrapper>
  );
}

export default IndexPage;
