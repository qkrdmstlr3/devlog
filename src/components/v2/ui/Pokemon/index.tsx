/* eslint-disable no-nested-ternary */
// Dependencies
import React from 'react';
import { match } from 'ts-pattern';
import { motion } from 'framer-motion';
import * as Style from './styled';

// Components
import MyHP from '../MyHP';
import EnemyHP from '../EnemyHP';
import Icon from '../Icon';
import MonsterBall from '../MonsterBall';

// Types
import { SizeEnum } from '../types';
import { PokemonType } from '../../../../hooks/usePokemon';

interface PokemonProps {
  /** 내 포켓몬인지 */
  isMyPokemon: boolean;
  isGameLoading: boolean;
  isBattleStartted: boolean;
  isOpenMe?: boolean;
  animSort?: AnimSort;
  pokemon: PokemonType;
}

export type AnimSort = 'None' | 'Summon' | 'Damaged' | 'Attack' | 'Die';
interface SetAnim {
  children: React.ReactElement;
  animSort: AnimSort;
  isMine: boolean;
}

function SetAnim({ children, animSort = 'None', isMine }: SetAnim) {
  const component = match({ animSort, isMine })
    .with({ animSort: 'None' }, () => <div>{children}</div>)
    .with({ animSort: 'Summon', isMine: false }, () => (
      <motion.div animate={{ x: [-1200, 0] }} transition={{ duration: 2 }}>
        {children}
      </motion.div>
    ))
    .with({ animSort: 'Summon', isMine: true }, () => (
      <motion.div animate={{ scale: [0, 1], x: 0 }} transition={{ duration: 0.7 }}>
        {children}
      </motion.div>
    ))
    .with({ animSort: 'Damaged' }, () => (
      <motion.div animate={{ opacity: [0.5, 1, 0.5, 1] }} transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    ))
    .with({ animSort: 'Attack', isMine: false }, () => (
      <motion.div animate={{ x: [0, -30, 0], y: [0, 30, 0], opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }}>
        {children}
      </motion.div>
    ))
    .with({ animSort: 'Attack', isMine: true }, () => (
      <motion.div animate={{ x: [0, 30, 0], y: [0, -30, 0], opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }}>
        {children}
      </motion.div>
    ))
    .with({ animSort: 'Die' }, () => (
      <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 0.7 }}>
        {children}
      </motion.div>
    ))
    .otherwise(() => children);
  return component;
}

function Pokemon({ isMyPokemon, isOpenMe, pokemon, isGameLoading, isBattleStartted, animSort = 'None' }: PokemonProps) {
  return isMyPokemon ? (
    isBattleStartted ? (
      <Style.Wrapper isMyPokemon={isMyPokemon}>
        <SetAnim animSort={animSort} isMine={isMyPokemon}>
          <Icon icon={pokemon.sort} size={SizeEnum.large} />
        </SetAnim>
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
          {isOpenMe && <Style.Person />}
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
      <SetAnim animSort={animSort} isMine={isMyPokemon}>
        <Icon icon={pokemon.sort} size={SizeEnum.large} />
      </SetAnim>
    </Style.Wrapper>
  );
}

export default Pokemon;
