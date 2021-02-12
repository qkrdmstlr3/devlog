// Dependencies
import React, { useEffect } from 'react';
import * as Style from './styled';
import { motion } from 'framer-motion';

// Recoil
import { useRecoilState } from 'recoil';
import { gameState } from '../../../lib/recoil/game';

// Components
import MyHP from '../MyHP';
import EnemyHP from '../EnemyHP';
import Icon from '../Icon';
import MonsterBall from '../MonsterBall';

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
  const [recoilGameState, setGameStatus] = useRecoilState(gameState);

  useEffect(() => {
    setTimeout(() => {
      setGameStatus({
        ...recoilGameState,
        loading: false,
      });
    }, 2000);
  }, []);

  useEffect(() => {}, [recoilGameState.loading]);

  if (isMyPokemon) {
    if (recoilGameState.gameStatus < 3) {
      return (
        <Style.Wrapper isMyPokemon={isMyPokemon}>
          <motion.div
            animate={{ x: recoilGameState.loading ? [1200, 0] : 0 }}
            transition={{ duration: 2 }}
          >
            <Style.Person />
          </motion.div>
          {recoilGameState.loading ? <div /> : <MonsterBall />}
        </Style.Wrapper>
      );
    }
    return (
      <Style.Wrapper isMyPokemon={isMyPokemon}>
        <motion.div
          animate={{ x: recoilGameState.loading ? [1200, 0] : 0 }}
          transition={{ duration: 2 }}
        >
          <Icon icon={icon} size={SizeEnum.large} />
        </motion.div>
        {recoilGameState.loading ? (
          <div />
        ) : (
          <MyHP name={name} hp={hp} mp={mp} />
        )}
      </Style.Wrapper>
    );
  }
  return (
    <Style.Wrapper isMyPokemon={isMyPokemon}>
      {recoilGameState.loading ? <div /> : <EnemyHP name={name} hp={hp} />}
      <motion.div
        animate={{ x: recoilGameState.loading ? [-1200, 0] : 0 }}
        transition={{ duration: 2 }}
      >
        <Icon icon={icon} size={SizeEnum.large} />
      </motion.div>
    </Style.Wrapper>
  );
}

export default Pokemon;
