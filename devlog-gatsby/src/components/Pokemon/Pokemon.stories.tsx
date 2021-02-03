import React from 'react';
import Pokemon from '.';

export default {
  title: 'Pokemon/Pokemon',
  component: Pokemon,
};

export const myPokemon = () => (
  <Pokemon isMyPokemon={true} hp={100} mp={20} icon="react" />
);

export const enemyPokemon = () => (
  <Pokemon isMyPokemon={false} hp={100} icon="react" />
);
