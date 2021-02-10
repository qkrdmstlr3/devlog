// Dependencies
import React from 'react';
import * as Style from './styled';
import { motion } from 'framer-motion';

// Components
import MyHP from '../MyHP';
import EnemyHP from '../EnemyHP';
import Icon from '../Icon';

// Types
import { IconNameType, SizeEnum } from '../../types';

interface PokemonProps {
  /** 내 포켓몬인지 */
  isMyPokemon: boolean;
  /** 포켓몬 종류 */
  icon: IconNameType;
  /** hp */
  hp: number;
  /** mp */
  mp?: number;
  /** 포켓몬 이름 */
  name: string;
}

function Pokemon({ isMyPokemon, icon, hp, mp = 0, name }: PokemonProps) {
  if (isMyPokemon) {
    return (
      <Style.Wrapper isMyPokemon={isMyPokemon}>
        <motion.div animate={{ x: [1200, 0] }} transition={{ duration: 2 }}>
          <Icon icon={icon} size={SizeEnum.large} />
        </motion.div>
        <MyHP name={name} hp={hp} mp={mp} />
      </Style.Wrapper>
    );
  }
  return (
    <Style.Wrapper isMyPokemon={isMyPokemon}>
      <EnemyHP name={name} hp={hp} />
      <motion.div animate={{ x: [-1200, 0] }} transition={{ duration: 2 }}>
        <Icon icon={icon} size={SizeEnum.large} />
      </motion.div>
    </Style.Wrapper>
  );
}

export default Pokemon;
