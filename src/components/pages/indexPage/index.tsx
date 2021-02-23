// Dependencies
import React from 'react';
import * as Style from './styled';

// Recoil
import { useRecoilValue } from 'recoil';
import { gameState } from '../../../lib/recoil/game';

// Components
import PokemonListModal from '../../UI/PokemonModal';
import Pokemon from '../../UI/Pokemon';
import SelectBox from '../../UI/SelectBox';
import TextBox from '../../UI/TextBox';
import BorderBox from '../../UI/BorderBox';
import FightBox from '../../UI/FightBox';

// Types
import { IconNameType } from '../../types';

function IndexPage() {
  const { loading, gameStatus, isPokemonListOpen, name } = useRecoilValue(
    gameState
  );

  if (isPokemonListOpen) {
    return <PokemonListModal />;
  }

  return (
    <Style.Wrapper>
      <Style.PokemonContainer>
        <Pokemon isMyPokemon={false} icon="react" />
        <Pokemon isMyPokemon={true} icon={name as IconNameType} />
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
