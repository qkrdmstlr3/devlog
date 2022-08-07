import React, { useEffect } from 'react';
import { match } from 'ts-pattern';
import PokemonListModal from '../../ui/PokemonListModal';
import SelectBox from '../../ui/SelectBox';
import FightBox from '../../ui/FightBox';
import TextBox from '../../ui/TextBox';
import * as Style from './styled';
import useGame, { GameAction, GameState, SELECT_OPTION_TYPE } from '../../../hooks/useGame';
import usePokemon, { PokemonSort, PokemonType } from '../../../hooks/usePokemon';
import Pokemon from '../../ui/Pokemon';

interface TextComponentProps {
  gameState: GameState;
  myPokemon: PokemonType;
  enemyPokemon: PokemonType;
  dispatch: React.Dispatch<GameAction>;
  damageEnemy: (hp: number) => void;
  damageMy: (sort: PokemonSort, hp: number) => void;
}

function TextComponent({ gameState, enemyPokemon, myPokemon, dispatch, damageEnemy, damageMy }: TextComponentProps) {
  return match(gameState._t)
    .with('enemySummonState', () => (
      <TextBox content={`앗 야생의 ${enemyPokemon.name}(이)가 나타났다!`} onClick={() => dispatch({ _t: 'FIGHT' })} />
    ))
    .with('mySummonState', () => (
      <TextBox content={`가랏 ${myPokemon.name}!!`} onClick={() => dispatch({ _t: 'OPEN_OPTION' })} />
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
        content={`야생 ${enemyPokemon.name}의 ${gameState.game.enemySkill}`}
        onClick={() => {
          const newHP = myPokemon.currentHP - enemyPokemon.skill[gameState.game.enemySkill].damage;
          damageMy(gameState.game.myPokemon, newHP);
          dispatch({ _t: 'MY_DAMAGE', isMyDead: !newHP });
        }}
      />
    ))
    .with('myDamageState', () => (
      <TextBox content={`내 ${myPokemon.name}이(가) 피해를 입었다!`} onClick={() => dispatch({ _t: 'MY_ATTACK' })} />
    ))
    .with('myAttackState', () => (
      <TextBox
        content={`내 ${myPokemon.name}의 ${gameState.game.mySkill}!!`}
        onClick={() => {
          const newHP = enemyPokemon.currentHP - myPokemon.skill[gameState.game.mySkill].damage;
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
    .otherwise(() => <TextBox content="" onClick={() => {}} isLoading />);
}

function Game() {
  const { gameState, dispatch } = useGame();
  const { currentMyPokemon, enemyPokemon, damageEnemy, damageMy } = usePokemon({
    currentMyPokemon: gameState.game.myPokemon,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ _t: 'START' });
    }, 2000);

    () => clearTimeout(timeout);
  }, []);

  return gameState.game.isPokemonList ? (
    <PokemonListModal />
  ) : (
    <Style.Wrapper>
      <Style.PokemonContainer>
        <Pokemon
          isMyPokemon={false}
          pokemon={enemyPokemon}
          isGameLoading={gameState.game.loading}
          isBattleStartted={!(gameState._t === 'initialState' || gameState._t === 'enemySummonState')}
        />
        <Pokemon
          isMyPokemon
          pokemon={currentMyPokemon}
          isGameLoading={gameState.game.loading}
          isBattleStartted={!(gameState._t === 'initialState' || gameState._t === 'enemySummonState')}
        />
      </Style.PokemonContainer>
      <TextComponent
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
