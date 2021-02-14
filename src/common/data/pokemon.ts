import { IconNameType } from '../../components/types';

/** 내 포켓몬과 상대 포켓몬의 정보를 표기 */
interface SkillType {
  /** 스킬 명 */
  name: string;
  /** 입힐 수 있는 데미지 평균 */
  damage: number;
}

interface PokemonType {
  /** 포켓몬 종류 */
  sort: IconNameType;
  /** 포켓몬 이름 */
  name: string;
  /** 포켓몬 레벨 */
  level: number;
  /** 체력 */
  hp: number;
  /** 사용 기술 */
  skill: SkillType[];
}

type MyPokemonType = {
  /** 포켓몬 종류 */
  [name: string]: PokemonType;
};

export const MyPokemon: MyPokemonType = {
  react: {
    sort: 'react',
    name: '리액트',
    level: 90,
    hp: 20,
    skill: [
      { name: '스킬1', damage: 3 },
      { name: '스킬2', damage: 5 },
    ],
  },
};

export const EnemyPokemon: PokemonType = {
  sort: 'react',
  name: '리액트',
  level: 99,
  hp: 20,
  skill: [
    { name: '스킬1', damage: 3 },
    { name: '스킬2', damage: 5 },
  ],
};
