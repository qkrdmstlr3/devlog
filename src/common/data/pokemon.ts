import { IconNameType } from '../../components/types';

/** 내 포켓몬과 상대 포켓몬의 정보를 표기 */
interface SkillType {
  /** 스킬 명 */
  name: string;
  /** 입힐 수 있는 데미지 평균 */
  damage: number;
  /** 기술 타입 */
  skillType?: string;
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
    level: 50,
    hp: 20,
    skill: [
      { name: '스킬1', damage: 3, skillType: '노멀' },
      { name: '스킬2', damage: 5, skillType: '노멀' },
      { name: '-', damage: 0 },
      { name: '-', damage: 0 },
    ],
  },
};

export const EnemyPokemon: PokemonType = {
  sort: 'react',
  name: '리액트',
  level: 99,
  hp: 50,
  skill: [
    { name: '스킬1', damage: 3 },
    { name: '스킬2', damage: 4 },
    { name: '스킬3', damage: 5 },
    { name: '스킬4', damage: 6 },
  ],
};
