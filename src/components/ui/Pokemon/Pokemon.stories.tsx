import React from 'react';
import Pokemon from '.';

export default {
  title: 'Pokemon/Pokemon',
  component: Pokemon,
};

export const myPokemon = () => <Pokemon isMyPokemon={true} icon="react" />;

export const enemyPokemon = () => <Pokemon isMyPokemon={false} icon="react" />;
