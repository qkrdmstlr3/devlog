import { atom } from 'recoil';

export const myPokemonState = atom({
  key: 'myPokemonState',
  default: {
    react: {
      sort: 'react',
      name: '리액트',
      level: 50,
      fullHP: 20,
      currentHP: 20,
      skill: [
        { name: '스킬1', damage: 3, skillType: '노멀' },
        { name: '스킬2', damage: 5, skillType: '노멀' },
        { name: '-', damage: 0 },
        { name: '-', damage: 0 },
      ],
    },
    graphql: {
      sort: 'graphql',
      name: '큐엘',
      level: 50,
      fullHP: 20,
      currentHP: 20,
      skill: [
        { name: '스킬1', damage: 3, skillType: '노멀' },
        { name: '스킬2', damage: 5, skillType: '노멀' },
        { name: '-', damage: 0 },
        { name: '-', damage: 0 },
      ],
    },
  },
});
