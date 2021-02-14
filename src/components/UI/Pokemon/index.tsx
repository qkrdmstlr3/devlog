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

// Data
import { MyPokemon, EnemyPokemon } from '../../../common/data/pokemon';

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
        {/* <motion.div
          animate={{ scale: [0, 1], x: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        > */}
        <Icon icon={icon} size={SizeEnum.large} />
        {/* </motion.div> */}
        <MyHP name={name} hp={hp} />
      </Style.Wrapper>
    );
  }
  return (
    <Style.Wrapper isMyPokemon={isMyPokemon}>
      {recoilGameState.loading ? (
        <div />
      ) : (
        <EnemyHP
          name={`${EnemyPokemon.name}: L${EnemyPokemon.level}`}
          hp={
            (recoilGameState.enemyCurrentHP / recoilGameState.enemyFullHP) * 100
          }
        />
      )}
      <motion.div
        animate={{ x: recoilGameState.loading ? [-1200, 0] : 0 }}
        transition={{ duration: 2 }}
      >
        <Icon icon={EnemyPokemon.sort} size={SizeEnum.large} />
      </motion.div>
    </Style.Wrapper>
  );
}

export default Pokemon;
