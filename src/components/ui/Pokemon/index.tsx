// Dependencies
import React, { useEffect } from 'react';
import * as Style from './styled';
import { motion } from 'framer-motion';

// Components
import MyHP from '../MyHP';
import EnemyHP from '../EnemyHP';
import Icon from '../Icon';
import MonsterBall from '../MonsterBall';

// Types
import { SizeEnum } from '../types';
import { PokemonSort, PokemonType } from '../../../hooks/usePokemon';

interface PokemonProps {
  /** 내 포켓몬인지 */
  isMyPokemon: boolean;
  isGameLoading: boolean;
  isBattleStartted: boolean;
  pokemon: PokemonType;
}

function Pokemon({ isMyPokemon, pokemon, isGameLoading, isBattleStartted }: PokemonProps) {
  return isMyPokemon ? (
    isBattleStartted ? (
      <Style.Wrapper isMyPokemon={isMyPokemon}>
        <motion.div animate={{ scale: [0, 1], x: 0 }} transition={{ duration: 0.7 }}>
          <Icon icon={pokemon.sort} size={SizeEnum.large} />
        </motion.div>
        <MyHP
          name={`${pokemon.name}: L${pokemon.level}`}
          hp={(pokemon.currentHP / pokemon.fullHP) * 100}
          currentHP={pokemon.currentHP}
          fullHP={pokemon.fullHP}
        />
      </Style.Wrapper>
    ) : (
      <Style.Wrapper isMyPokemon={isMyPokemon}>
        <motion.div animate={{ x: isGameLoading ? [1200, 0] : 0 }} transition={{ duration: 2 }}>
          <Style.Person />
        </motion.div>
        {isGameLoading ? <div /> : <MonsterBall />}
      </Style.Wrapper>
    )
  ) : (
    <Style.Wrapper isMyPokemon={isMyPokemon}>
      {isGameLoading ? (
        <div />
      ) : (
        <EnemyHP name={`${pokemon.name}: L${pokemon.level}`} hp={(pokemon.currentHP / pokemon.fullHP) * 100} />
      )}
      <motion.div
        animate={{ x: isGameLoading ? [-1200, 0] : 0 }}
        transition={{ duration: 2 }}
        style={{ height: '100%' }}
      >
        <Icon icon={pokemon.sort} size={SizeEnum.large} />
      </motion.div>
    </Style.Wrapper>
  );
}

export default Pokemon;
