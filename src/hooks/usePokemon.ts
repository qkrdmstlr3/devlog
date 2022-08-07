import { useState } from 'react';

export type PokemonSort = 'react' | 'graphql';

type SkillType = {
  /** 입힐 수 있는 데미지 평균 */
  damage: number;
  /** 기술 타입 */
  type?: '노멀' | '격투' | '드래곤' | '물';
};

export type PokemonType = {
  /* 포켓몬 종류 */
  sort: PokemonSort;
  /* 포켓몬 이름 */
  name: string;
  /* 포켓몬 레벨 */
  level: number;
  /* 풀피 */
  fullHP: number;
  /* 현재 체력 */
  currentHP: number;
  /* 사용 기술 */
  skill: { [skill in string]: SkillType };
};

interface UsePokemonParameter {
  currentMyPokemon: PokemonSort;
}

export const enemyPokemonInitial: PokemonType = {
  sort: 'react',
  name: '리액트',
  level: 99,
  fullHP: 100,
  currentHP: 100,
  skill: {
    skill1: { damage: 3, type: '노멀' },
    skill2: { damage: 4, type: '노멀' },
    skill3: { damage: 5, type: '노멀' },
    skill4: { damage: 6, type: '노멀' },
  },
};

export const myPokemonInitial: { [name in PokemonSort]: PokemonType } = {
  react: {
    sort: 'react',
    name: '리액트',
    level: 50,
    fullHP: 20,
    currentHP: 20,
    skill: {
      skill1: { damage: 3, type: '노멀' },
      skill2: { damage: 4, type: '격투' },
      skill3: { damage: 4, type: '물' },
      skill4: { damage: 4, type: '노멀' },
    },
  },
  graphql: {
    sort: 'graphql',
    name: '큐엘',
    level: 50,
    fullHP: 20,
    currentHP: 20,
    skill: {
      skill1: { damage: 3, type: '노멀' },
      skill2: { damage: 4, type: '격투' },
      skill3: { damage: 4, type: '드래곤' },
      skill4: { damage: 4, type: '드래곤' },
    },
  },
};

const usePokemon = ({ currentMyPokemon }: UsePokemonParameter) => {
  const [myPokemon, setMyPokemon] = useState<{ [name in PokemonSort]: PokemonType }>(myPokemonInitial);
  const [enemyPokemon, setEnemyPokemon] = useState<PokemonType>(enemyPokemonInitial);

  const damageMy = (pokemon: PokemonSort, newHP: number) => {
    myPokemon[pokemon].currentHP = newHP;
    setMyPokemon({ ...myPokemon });
  };

  const damageEnemy = (newHP: number) => {
    setEnemyPokemon({ ...enemyPokemon, currentHP: newHP });
  };

  return {
    currentMyPokemon: myPokemon[currentMyPokemon],
    enemyPokemon: enemyPokemon,
    damageMy,
    damageEnemy,
  };
};

export default usePokemon;
