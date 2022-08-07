import { useEffect, useState } from 'react';

export type PokemonSort = 'react' | 'graphql' | 'docker';

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
    skill1: { damage: 13, type: '노멀' },
    skill2: { damage: 14, type: '노멀' },
    skill3: { damage: 15, type: '노멀' },
    skill4: { damage: 16, type: '노멀' },
  },
};

export type MyPokemonList = { [name in PokemonSort]: PokemonType };

export const myPokemonInitial: MyPokemonList = {
  react: {
    sort: 'react',
    name: '리액트',
    level: 50,
    fullHP: 20,
    currentHP: 20,
    skill: {
      skill1: { damage: 13, type: '노멀' },
      skill2: { damage: 14, type: '격투' },
      skill3: { damage: 14, type: '물' },
      skill4: { damage: 14, type: '노멀' },
    },
  },
  graphql: {
    sort: 'graphql',
    name: '큐엘',
    level: 50,
    fullHP: 20,
    currentHP: 20,
    skill: {
      skill1: { damage: 13, type: '노멀' },
      skill2: { damage: 14, type: '격투' },
      skill3: { damage: 14, type: '드래곤' },
      skill4: { damage: 14, type: '드래곤' },
    },
  },
  docker: {
    sort: 'docker',
    name: '도커',
    level: 50,
    fullHP: 20,
    currentHP: 20,
    skill: {
      skill1: { damage: 13, type: '노멀' },
      skill2: { damage: 14, type: '격투' },
      skill3: { damage: 14, type: '물' },
      skill4: { damage: 14, type: '노멀' },
    },
  },
};

const deepCopy = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

const usePokemon = ({ currentMyPokemon }: UsePokemonParameter) => {
  const [myPokemon, setMyPokemon] = useState<MyPokemonList>(deepCopy(myPokemonInitial));
  const [enemyPokemon, setEnemyPokemon] = useState<PokemonType>(deepCopy(enemyPokemonInitial));
  const isAllDead = Object.values(myPokemon).every((pokemon) => pokemon.currentHP === 0);

  const damageMy = (pokemon: PokemonSort, newHP: number) => {
    myPokemon[pokemon].currentHP = newHP;
    setMyPokemon({ ...myPokemon });
  };

  const damageEnemy = (newHP: number) => {
    setEnemyPokemon({ ...enemyPokemon, currentHP: newHP });
  };

  return {
    myPokemonList: myPokemon,
    currentMyPokemon: myPokemon[currentMyPokemon],
    enemyPokemon: enemyPokemon,
    isAllDead,
    damageMy,
    damageEnemy,
  };
};

export default usePokemon;
