import { atomFamily, atom, selector } from 'recoil';

export const gameState = atom({
  key: 'gameState',
  default: {
    loading: true,
  },
});
