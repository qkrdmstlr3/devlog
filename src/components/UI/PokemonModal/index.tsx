// Dependencies
import React, { useState } from 'react';
import * as Style from './styled';

// Recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { gameState } from '../../../lib/recoil/game';
import { myPokemonState } from '../../../lib/recoil/myPokemon';

// Component
import Icon from '../Icon';
import BorderBox from '../BorderBox';

//Type
import { IconNameType, SizeEnum } from '../../types';

function PokemonListModal() {
  const [pokemonSelected, setPokemonSelected] = useState<boolean>(false);
  const [pokemonIndex, setPokemonIndex] = useState<number>(0);
  // const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const recoilMyPokemon = useRecoilValue(myPokemonState);
  const [recoilGameState, setRecoilGameState] = useRecoilState(gameState);

  const mouseEnterHandler = (index: number) => {
    if (pokemonSelected || !Object.values(recoilMyPokemon)[index].currentHP)
      return;
    setPokemonIndex(index);
  };

  const pokemonClickHandler = (index: number) => {
    if (!Object.values(recoilMyPokemon)[index].currentHP) return;
    setPokemonIndex(index);
    setPokemonSelected(!pokemonSelected);
  };

  const changePokemonClickHandler = () => {
    const isSamePokemon =
      Object.values(recoilMyPokemon)[pokemonIndex].sort ===
      recoilGameState.name;
    if (isSamePokemon) {
      setRecoilGameState({
        ...recoilGameState,
        isPokemonListOpen: false,
      });
      return;
    }

    setRecoilGameState({
      ...recoilGameState,
      gameStatus: 10,
      name: Object.keys(recoilMyPokemon)[pokemonIndex],
      isPokemonListOpen: false,
    });
  };

  const backClickHandler = () => {
    setRecoilGameState({
      ...recoilGameState,
      isPokemonListOpen: false,
    });
  };

  return (
    <Style.Wrapper>
      <Style.PokemonWrapper>
        {Object.values(recoilMyPokemon).map((pokemon, index) => (
          <div key={pokemon.name}>
            <Style.Pokemon
              onClick={() => pokemonClickHandler(index)}
              onMouseEnter={() => mouseEnterHandler(index)}
            >
              <Style.LeftWrapper>
                {pokemonIndex === index && <Style.Select>▶</Style.Select>}
                <Style.IconWrapper>
                  <Icon
                    icon={pokemon.sort as IconNameType}
                    size={SizeEnum.large}
                  />
                </Style.IconWrapper>
                {pokemon.name}: L{pokemon.level}
              </Style.LeftWrapper>
              <Style.HPWrapper>
                <Style.HPNumber>
                  {pokemon.currentHP} / {pokemon.fullHP}
                </Style.HPNumber>
                <Style.HPBar hp={(pokemon.currentHP / pokemon.fullHP) * 100} />
              </Style.HPWrapper>
            </Style.Pokemon>
          </div>
        ))}
      </Style.PokemonWrapper>
      <BorderBox height="35%">포켓몬을 선택하세요</BorderBox>
      {pokemonSelected && (
        <Style.SelectWrapper>
          <BorderBox height="100%">
            <Style.SelectList>
              <Style.SelectMenu onClick={changePokemonClickHandler}>
                교체하기
              </Style.SelectMenu>
              <Style.SelectMenu onClick={backClickHandler}>
                전투로 돌아가기
              </Style.SelectMenu>
            </Style.SelectList>
          </BorderBox>
        </Style.SelectWrapper>
      )}
    </Style.Wrapper>
  );
}

export default PokemonListModal;
