import React, { useEffect } from 'react';
import { match } from 'ts-pattern';
import { navigate } from 'gatsby';
import PokemonListModal from '../../ui/PokemonListModal';
import SelectBox from '../../ui/SelectBox';
import FightBox from '../../ui/FightBox';
import TextBox from '../../ui/TextBox';
import * as Style from './styled';
import useGame, { GameAction, GameState, SELECT_OPTION_TYPE } from '../../../hooks/useGame';
import usePokemon, { PokemonSort, PokemonType } from '../../../hooks/usePokemon';
import Pokemon, { AnimSort } from '../../ui/Pokemon';
import { mainPageRoute } from '../../../route';

interface TextComponentProps {
  gameState: GameState;
  myPokemon: PokemonType;
  enemyPokemon: PokemonType;
  dispatch: React.Dispatch<GameAction>;
  isAllDead: boolean;
  damageEnemy: (hp: number) => void;
  damageMy: (sort: PokemonSort, hp: number) => void;
}

function TextComponent({
  isAllDead,
  gameState,
  enemyPokemon,
  myPokemon,
  dispatch,
  damageEnemy,
  damageMy,
}: TextComponentProps) {
  return match(gameState._t)
    .with('enemySummonState', () => (
      <TextBox content={`앗 야생의 ${enemyPokemon.name}(이)가 나타났다!`} onClick={() => dispatch({ _t: 'FIGHT' })} />
    ))
    .with('mySummonState', () => (
      <TextBox content={`가랏 ${myPokemon.name}!`} onClick={() => dispatch({ _t: 'OPEN_OPTION' })} />
    ))
    .with('myOptionState', () => (
      <SelectBox onClickOption={(option: SELECT_OPTION_TYPE) => dispatch({ _t: 'SELECT_OPTION', option })} />
    ))
    .with('skillOption', () => (
      <FightBox
        myPokemon={myPokemon}
        onClickSkill={(skill) =>
          dispatch({
            _t: 'SKILL_SELECT__ENEMY_ATTACK',
            mySkill: skill,
            enemySkill: Object.keys(enemyPokemon.skill)[Math.floor(Math.random() * 4)],
          })
        }
      />
    ))
    .with('enemyAttackState', () => (
      <TextBox
        content={`야생 ${enemyPokemon.name}의 ${gameState.game.enemySkill}!`}
        onClick={() => {
          const newHP = Math.max(myPokemon.currentHP - enemyPokemon.skill[gameState.game.enemySkill].damage, 0);
          damageMy(gameState.game.myPokemon, newHP);
          dispatch({ _t: 'MY_DAMAGE' });
        }}
      />
    ))
    .with('myDamageState', () => (
      <TextBox
        content={`내 ${myPokemon.name}이(가) 피해를 입었다!`}
        onClick={() => dispatch({ _t: 'CHECK_MY_DEAD', isMyDead: !myPokemon.currentHP })}
      />
    ))
    .with('myAttackState', () => (
      <TextBox
        content={`내 ${myPokemon.name}의 ${gameState.game.mySkill}!`}
        onClick={() => {
          const newHP = Math.max(enemyPokemon.currentHP - myPokemon.skill[gameState.game.mySkill].damage, 0);
          damageEnemy(newHP);
          dispatch({ _t: 'ENEMY_DAMAGE', isEnemyDead: !newHP });
        }}
      />
    ))
    .with('enemyDamageState', () => (
      <TextBox
        content={`야생의 ${enemyPokemon.name}이(가) 피해를 입었다!`}
        onClick={() => dispatch({ _t: 'OPEN_OPTION' })}
      />
    ))
    .with('myPokemonDeadState', () => (
      <TextBox
        content={`내 ${myPokemon.name}이(가) 쓰러졌다!`}
        onClick={() => dispatch({ _t: 'MY_DEAD', isAliveOther: !isAllDead })}
      />
    ))
    .with('retireMyState', () => <TextBox content="돌아와!" onClick={() => dispatch({ _t: 'RESUMMON' })} />)
    .with('myLoseState', () => (
      <TextBox content={`야생의 ${enemyPokemon.name}에게 패배했다!`} onClick={() => navigate(mainPageRoute)} />
    ))
    .otherwise(() => <TextBox content="" onClick={() => {}} isLoading />);
}

function Game() {
  const { gameState, dispatch } = useGame();
  const { isAllDead, myPokemonList, currentMyPokemon, enemyPokemon, damageEnemy, damageMy } = usePokemon({
    currentMyPokemon: gameState.game.myPokemon,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ _t: 'START' });
    }, 2000);

    () => clearTimeout(timeout);
  }, []);

  const backToGame = () => {
    dispatch({ _t: 'OPEN_OPTION' });
  };
  const changePokemon = (sort: PokemonSort) => dispatch({ _t: 'SELECT_MY_POKEMON', sort });

  const enemyAnimSort = match<GameState['_t'], AnimSort>(gameState._t)
    .with('initialState', () => 'Summon')
    .with('enemyDamageState', () => 'Damaged')
    .with('enemyAttackState', () => 'Attack')
    .with('enemyPokemonDeadState', () => 'Die')
    .otherwise(() => 'None');

  const myAnimSort = match<GameState['_t'], AnimSort>(gameState._t)
    .with('mySummonState', () => 'Summon')
    .with('myDamageState', () => 'Damaged')
    .with('myAttackState', () => 'Attack')
    .with('myPokemonDeadState', () => 'Die')
    .otherwise(() => 'None');

  return gameState.game.isPokemonList ? (
    <PokemonListModal
      myPokemons={myPokemonList}
      currentMyPokemonSort={currentMyPokemon.sort}
      backToGame={backToGame}
      changePokemon={changePokemon}
    />
  ) : (
    <Style.Wrapper>
      <Style.PokemonContainer>
        <Pokemon
          isMyPokemon={false}
          pokemon={enemyPokemon}
          animSort={enemyAnimSort}
          isGameLoading={gameState.game.loading}
          isBattleStartted={!(gameState._t === 'initialState' || gameState._t === 'enemySummonState')}
        />
        <Pokemon
          isMyPokemon
          pokemon={currentMyPokemon}
          animSort={myAnimSort}
          isGameLoading={gameState.game.loading}
          isOpenMe={gameState._t !== 'retireMyState'}
          isBattleStartted={
            !(
              gameState._t === 'initialState' ||
              gameState._t === 'enemySummonState' ||
              gameState._t === 'retireMyState'
            )
          }
        />
      </Style.PokemonContainer>
      <TextComponent
        isAllDead={isAllDead}
        gameState={gameState}
        myPokemon={currentMyPokemon}
        enemyPokemon={enemyPokemon}
        dispatch={dispatch}
        damageEnemy={damageEnemy}
        damageMy={damageMy}
      />
    </Style.Wrapper>
  );
}

export default Game;
