// Dependencies
import React, { useState } from 'react';
import * as Style from './styled';
import { navigate } from 'gatsby';

// Component
import Icon from '../Icon';
import BorderBox from '../BorderBox';

//Type
import { SizeEnum } from '../types';
import { MyPokemonList, PokemonSort } from '../../../hooks/usePokemon';
import useKeyboard from '../../../hooks/useKeyboard';

interface PokemonListModalProps {
  currentMyPokemonSort: PokemonSort;
  myPokemons: MyPokemonList;
  backToGame: () => void;
  changePokemon: (sort: PokemonSort) => void;
}

function PokemonListModal({ myPokemons, currentMyPokemonSort, changePokemon, backToGame }: PokemonListModalProps) {
  const isMyPokemonLive = !!myPokemons[currentMyPokemonSort].currentHP;
  const myPokemonSorts = Object.keys(myPokemons) as PokemonSort[];
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0);
  const [selectorIndex, setSelectorIndex] = useState<number>();

  const changePokemonClickHandler = () => {
    const isSamePokemon = currentMyPokemonSort === myPokemonSorts[selectedPokemonIndex];
    if (isSamePokemon) return backToGame();
    return changePokemon(myPokemonSorts[selectedPokemonIndex]);
  };
  const selector = [{ text: '교체하기', onClick: changePokemonClickHandler }];
  if (isMyPokemonLive) selector.push({ text: '전투로 돌아가기', onClick: backToGame });

  useKeyboard({
    keyEvents: [
      {
        key: 'ArrowDown',
        keyEvent: () =>
          selectorIndex === undefined
            ? setSelectedPokemonIndex(Math.min(myPokemonSorts.length - 1, selectedPokemonIndex + 1))
            : setSelectorIndex(Math.min(selector.length - 1, selectorIndex + 1)),
      },
      {
        key: 'ArrowUp',
        keyEvent: () =>
          selectorIndex === undefined
            ? setSelectedPokemonIndex(Math.max(0, selectedPokemonIndex - 1))
            : setSelectorIndex(Math.max(0, selectorIndex - 1)),
      },
      {
        key: 'Space',
        keyEvent: () =>
          myPokemons[myPokemonSorts[selectedPokemonIndex]].currentHP
            ? selectorIndex === undefined
              ? setSelectorIndex(0)
              : selector[selectorIndex].onClick()
            : {},
      },
      { key: 'Escape', keyEvent: () => setSelectorIndex(undefined) },
    ],
  });

  const pokemonClickHandler = (index: number) => {
    setSelectedPokemonIndex(index);
  };

  return (
    <Style.Wrapper>
      <Style.PokemonWrapper>
        {Object.values(myPokemons).map((pokemon, index) => (
          <div key={pokemon.name}>
            <Style.Pokemon onClick={() => pokemonClickHandler(index)}>
              <Style.LeftWrapper>
                {selectedPokemonIndex === index && <Style.Select>▶</Style.Select>}
                <Style.IconWrapper>
                  <Icon icon={pokemon.sort as PokemonSort} size={SizeEnum.large} />
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
      <BorderBox height="35%" />
      <Style.SelectWrapper>
        <BorderBox height="100%">
          {myPokemons[myPokemonSorts[selectedPokemonIndex]].currentHP ? (
            <Style.SelectList>
              {selector.map((selector, index) => (
                <Style.SelectMenu key={selector.text} onClick={selector.onClick}>
                  {selectorIndex === index && <Style.Select>▶</Style.Select>}
                  {selector.text}
                </Style.SelectMenu>
              ))}
            </Style.SelectList>
          ) : (
            <div>다른 포켓몬을 골라주세요</div>
          )}
        </BorderBox>
      </Style.SelectWrapper>
    </Style.Wrapper>
  );
}

export default PokemonListModal;
