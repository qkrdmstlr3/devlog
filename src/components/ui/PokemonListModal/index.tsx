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

interface PokemonListModalProps {
  currentMyPokemonSort: PokemonSort;
  myPokemons: MyPokemonList;
  backToGame: () => void;
  changePokemon: (sort: PokemonSort) => void;
}

function PokemonListModal({ myPokemons, currentMyPokemonSort, changePokemon, backToGame }: PokemonListModalProps) {
  const [pokemonSelectedSort, setPokemonSelectedSort] = useState<PokemonSort>();

  const pokemonClickHandler = (sort: PokemonSort) => {
    if (!myPokemons[sort].currentHP) return;
    const samePokemon = sort === pokemonSelectedSort;
    setPokemonSelectedSort(samePokemon ? undefined : sort);
  };

  const changePokemonClickHandler = () => {
    const isSamePokemon = currentMyPokemonSort === pokemonSelectedSort;
    if (!pokemonSelectedSort || isSamePokemon) return backToGame();
    return changePokemon(pokemonSelectedSort);
  };

  return (
    <Style.Wrapper>
      <Style.PokemonWrapper>
        {Object.values(myPokemons).map((pokemon) => (
          <div key={pokemon.name}>
            <Style.Pokemon onClick={() => pokemonClickHandler(pokemon.sort)}>
              <Style.LeftWrapper>
                {pokemonSelectedSort === pokemon.sort && <Style.Select>▶</Style.Select>}
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
      <BorderBox height="35%">{pokemonSelectedSort ? '' : '포켓몬을 선택하세요'}</BorderBox>
      {pokemonSelectedSort && (
        <Style.SelectWrapper>
          <BorderBox height="100%">
            <Style.SelectList>
              <Style.SelectMenu onClick={changePokemonClickHandler}>교체하기</Style.SelectMenu>
              <Style.SelectMenu onClick={backToGame}>전투로 돌아가기</Style.SelectMenu>
            </Style.SelectList>
          </BorderBox>
        </Style.SelectWrapper>
      )}
    </Style.Wrapper>
  );
}

export default PokemonListModal;
