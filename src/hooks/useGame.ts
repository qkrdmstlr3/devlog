import { useReducer } from 'react';
import { match } from 'ts-pattern';

type GameContext = {
  isGameOver: boolean;
  loading: boolean;
  myPokemon: 'react' | 'graphql';
  mySkill: string;
  enemySkill: string;
  isPokemonList: boolean;
};

export type GameState =
  // 로딩 상태
  | { _t: 'initialState'; game: GameContext }
  // 상대 포켓몬 등장 상태
  | { _t: 'enemySummonState'; game: GameContext }
  // 내 포켓몬이 소환된 상태
  | { _t: 'mySummonState'; game: GameContext }
  // 선택창이 뜬 상태
  | { _t: 'myOptionState'; game: GameContext }
  // 포켓몬 선택창이 뜬 상태
  | { _t: 'pokemonOptionState'; game: GameContext }
  // 포켓몬을 회수하는 상태
  | { _t: 'retireMyState'; game: GameContext }
  // 스킬창이 뜬 상태
  | { _t: 'skillOption'; game: GameContext }
  // 적이 공격하는 상태
  | { _t: 'enemyAttackState'; game: GameContext }
  // 내가 데미지를 받은 상태
  | { _t: 'myDamageState'; game: GameContext }
  // 내가 공격하는 상태
  | { _t: 'myAttackState'; game: GameContext }
  // 적이 데미지를 받은 상태
  | { _t: 'enemyDamageState'; game: GameContext }
  // 내 포켓몬이 쓰러진 상태
  | { _t: 'myPokemonDeadState'; game: GameContext }
  // 적 포켓몬이 쓰러진 상태
  | { _t: 'enemyPokemonDeadState'; game: GameContext }
  // 게임 종료
  | { _t: 'gameOverState'; game: GameContext };

export type SELECT_OPTION_TYPE = 'fight' | 'pokemon';
export type GameAction =
  | { _t: 'START' }
  | { _t: 'FIGHT' }
  | { _t: 'OPEN_OPTION' }
  | { _t: 'SELECT_OPTION'; option: SELECT_OPTION_TYPE }
  | { _t: 'SELECT_MY_POKEMON'; name: string }
  | { _t: 'RESUMMON' }
  | { _t: 'SKILL_SELECT__ENEMY_ATTACK'; mySkill: string; enemySkill: string }
  | { _t: 'MY_DAMAGE'; isMyDead: boolean }
  | { _t: 'MY_DEAD'; isAliveOther: boolean }
  | { _t: 'MY_ATTACK' }
  | { _t: 'ENEMY_DAMAGE'; isEnemyDead: boolean };

const reducer: React.Reducer<GameState, GameAction> = (state, action): GameState =>
  match<GameAction['_t'], GameState>(action._t)
    .with('START', () => ({ ...state, game: { ...state.game, loading: false }, _t: 'enemySummonState' }))
    .with('FIGHT', () => ({ ...state, _t: 'mySummonState' }))
    .with('OPEN_OPTION', () => ({ ...state, _t: 'myOptionState' }))
    .with('SELECT_OPTION', () =>
      action._t === 'SELECT_OPTION'
        ? { ...state, _t: action.option === 'fight' ? 'skillOption' : 'pokemonOptionState' }
        : state
    )
    .with('SKILL_SELECT__ENEMY_ATTACK', () =>
      action._t === 'SKILL_SELECT__ENEMY_ATTACK'
        ? {
            ...state,
            game: { ...state.game, mySkill: action.mySkill, enemySkill: action.enemySkill },
            _t: 'enemyAttackState',
          }
        : state
    )
    .with('MY_DAMAGE', () =>
      action._t === 'MY_DAMAGE' ? { ...state, _t: action.isMyDead ? 'myPokemonDeadState' : 'myDamageState' } : state
    )
    .with('MY_ATTACK', () => ({ ...state, _t: 'myAttackState' }))
    .with('ENEMY_DAMAGE', () =>
      action._t === 'ENEMY_DAMAGE' ? { ...state, _t: action.isEnemyDead ? 'gameOverState' : 'enemyDamageState' } : state
    )
    .with('MY_DEAD', () =>
      action._t === 'MY_DEAD' ? { ...state, _t: action.isAliveOther ? 'pokemonOptionState' : 'gameOverState' } : state
    )
    .with('SELECT_MY_POKEMON', () =>
      action._t === 'SELECT_MY_POKEMON'
        ? {
            ...state,
            _t: action.name === state.game.myPokemon ? 'myOptionState' : 'retireMyState',
          }
        : state
    )
    .with('RESUMMON', () => ({ ...state, _t: 'mySummonState' }))
    .exhaustive();

const initialState: GameState = {
  _t: 'initialState',
  game: { isGameOver: false, loading: true, myPokemon: 'react', mySkill: '', enemySkill: '', isPokemonList: false },
};

const useGame = () => {
  const [gameState, dispatch] = useReducer(reducer, initialState);

  return { gameState, dispatch };
};

export default useGame;
