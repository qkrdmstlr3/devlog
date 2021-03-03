// Dependencies
import React, { useEffect, useState } from 'react';
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
  const [Component, setComponent] = useState<React.ReactElement>(<></>);
  const { loading, gameStatus, isPokemonListOpen, sort } = useRecoilValue(
    gameState
  );

  const controlRenderingComponent = () => {
    if (loading) {
      setComponent(<BorderBox height="35%" />);
    } else if (gameStatus === 3) {
      setComponent(<SelectBox />);
    } else if (gameStatus === 4) {
      setComponent(<FightBox />);
    } else {
      setComponent(<TextBox />);
    }
  };

  useEffect(() => {
    controlRenderingComponent();
  }, [loading, gameStatus]);

  return isPokemonListOpen ? (
    <PokemonListModal />
  ) : (
    <Style.Wrapper>
      <Style.PokemonContainer>
        <Pokemon isMyPokemon={false} icon="react" />
        <Pokemon isMyPokemon={true} icon={sort as IconNameType} />
      </Style.PokemonContainer>
      {Component}
    </Style.Wrapper>
  );
}

export default IndexPage;
