---
id: 18
title: FSM를 이용하여 포켓몬 게임 만들기
date: '2022-08-14'
category: develop
summary: 블로그 좌측 상단에 있는 game버튼을 눌러보세요!
---

![fsm](/develop/images/fsm-pokemon/game.png)

제 블로그 글 목록의 좌측 상단에 있는 버튼을 누르면 나오는 포켓몬 게임에 대한 글이예요. 이 글에서 나오는 모든 소스코드는 [여기](https://github.com/qkrdmstlr3/devlog)에서 볼 수 있어요. ~~부끄러운 소스코드들이 많아요~~ 대부분의 제 글에서 그렇듯이 부가적인 부분은 차치하고 FSM을 사용한 구현에 초점을 맞춰보려해요.

**현재 반응형이 구현되어있지않아 모바일에서 글자가 깨질 수 있어요**

## FSM이란

**FSM**은 **유한 상태 기계**의 줄임말이예요. `상태`와 `전이`라는 두 가지 요소들을 가져요. FSM은 정의된 상태들이 전이를 통해서 다른 상태로 변경되는 방식으로 작동해요.

> 프로그래밍언어개론에서 배운 자료들로 내용을 보충할 계획이예요. (현재 노트북에 자료가 없어 보류,,)

## FSM으로 포켓몬 게임 만들기

제가 만드려하는 포켓몬 게임은 턴제 게임이예요. 각 턴에 일어나는 일들을 상태로 정의한다면 효율적인 코드를 짤 수 있을 것이라고 생각했고, FSM을 도입하게 되었어요.

처음에는 [xstate](https://xstate.js.org/)라는 FSM을 기반으로한 상태관리도구를 사용하려 했었어요. 하지만 설계를 하다보니 상태가 생각보다 많았고 고려해야할 경우가 많아져 잘 사용할 수 있을지 모르겠다는 생각이 들었어요. 그래서 우선적으로 useReducer를 이용해서 상태관리를 하기로 했어요.

### FSM 만들기

![fsm](/develop/images/fsm-pokemon/fsm.png)

xstate의 visualizer를 사용해서 상태머신을 그려보았어요. (그림이 작은데 [여기](https://stately.ai/viz/7bf60b0a-eb04-4946-9964-9791dce2483b)에서 좀 더 자세한 사진을 볼 수 있어요. 구체적인 조건들은 제외하고 상태와 전이만 표현하였어요)

짙은 회색 사각형이 상태를 나타내고, 회색 둥근 사각형이 전이를 나타내요. `initialState`가 초기상태로 그려져있고, `myWinState`와 `myLoseState`가 마지막상태로 그려져있어요. 마지막 상태에 도달하면 게임이 끝나게 되요.

### 코드로 표현하기

게임은 현재 두 가지 hook을 이용해서 상태를 관리하고 있어요. usePokemon에서는 useState를 이용해 나와 적의 포켓몬들을 관리하고 useGame에서는 useReducer를 이용해 게임의 전체적인 상황을 관리해요. 여기서 FSM을 사용하고 있는 useGame을 살펴볼게요.

아래 코드는 현재 게임의 전반적인 상황을 관리하고 있는 Context예요. FSM에서 상태가 전이에 의해서 다른 상태로 변경될 때 Context도 그에 맞춰 변경되요.

```ts
// useGame.ts
type GameContext = {
  /* 게임이 끝났는지 */
  isGameOver: boolean;
  /* 게임이 시작되었는지 */
  loading: boolean;
  /* 현재 나의 포켓몬 */
  myPokemon: PokemonSort;
  /* 현재 나의 스킬 */
  mySkill: string;
  /* 현재 적의 스킬 */
  enemySkill: string;
  /* 포켓몬 선택 화면인지 */
  isPokemonList: boolean;
};
```

GameState타입은 FSM에서 상태의 역할을 하는 것들의 타입이고, GameAction은 한 상태에서 다음 상태를 트리거하는 action들을 정의한 타입이예요.

```ts
// useGame.ts
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
  // 이겼다
  | { _t: 'myWinState'; game: GameContext }
  // 졌다
  | { _t: 'myLoseState'; game: GameContext };

export type SELECT_OPTION_TYPE = 'fight' | 'pokemon';
export type GameAction =
  | { _t: 'START' }
  | { _t: 'FIGHT' }
  | { _t: 'OPEN_OPTION' }
  | { _t: 'SELECT_OPTION'; option: SELECT_OPTION_TYPE }
  | { _t: 'SELECT_MY_POKEMON'; sort: PokemonSort }
  | { _t: 'RESUMMON' }
  | { _t: 'SKILL_SELECT__ENEMY_ATTACK'; mySkill: string; enemySkill: string }
  | { _t: 'MY_DAMAGE' }
  | { _t: 'CHECK_MY_DEAD'; isMyDead: boolean }
  | { _t: 'MY_DEAD'; isAliveOther: boolean }
  | { _t: 'ENEMY_DAMAGE'; isEnemyDead: boolean };
```

---

전이에 의한 변경에는 reducer가 사용되어요. dispatch로 전달된 action을 reducer에서 받아 알맞은 다음 상태로 변경해주어요

실제 코드를 붙여넣을라 하였지만 양이 길어질 수 있어 분량이 긴 케이스는 state를 반환하도록 표현했어요(...로 주석이 달려있는 부분들)

```ts
const reducer: React.Reducer<GameState, GameAction> = (state, action): GameState =>
  match<GameAction['_t'], GameState>(action._t)
    .with('START', () => ({ ...state, game: { ...state.game, loading: false }, _t: 'enemySummonState' }))
    .with('FIGHT', () => ({ ...state, _t: 'mySummonState' }))
    .with('OPEN_OPTION', () => ({ ...state, game: { ...state.game, isPokemonList: false }, _t: 'myOptionState' }))
    .with('SELECT_OPTION', () => state) // ...
    .with('SKILL_SELECT__ENEMY_ATTACK', () => state) // ...
    .with('MY_DAMAGE', () => ({ ...state, _t: 'myDamageState' }))
    .with('CHECK_MY_DEAD', () => state) // ...
    .with('ENEMY_DAMAGE', () => state) // ...
    .with('MY_DEAD', () => state) // ...
    .with('SELECT_MY_POKEMON', () => state) // ...
    .with('RESUMMON', () => ({ ...state, _t: 'mySummonState' }))
    .otherwise(() => state);
```

이렇게 정의해준 것들을 사용하면 useGame훅을 만들 수 있어요

```ts
// useGame.ts
const initialState: GameState = {
  _t: 'initialState',
  game: { isGameOver: false, loading: true, myPokemon: 'react', mySkill: '', enemySkill: '', isPokemonList: false },
};

const useGame = () => {
  const [gameState, dispatch] = useReducer(reducer, initialState);

  return { gameState, dispatch };
};
```

### 상태에 따라 대화상자 렌더링해주기

만들어진 useGame훅은 Game페이지 컴포넌트에서 사용되어요.
useGame의 반환값 중에는 현재 게임의 상태도 있는데, 이것을 사용해 경우에 따라 렌더링을 다르게 시켜줄 수 있어요. 대화창도 그것들 중 하나인데, 실제 로직의 일부분을 가져와보았어요.
각 상태에 따라 서로 다른 대화상자(Text, Select, Fight)와 대화 유형을 보여주게되어요.

클릭시에 useReducer의 반환 값인 dispatch를 사용해서 다음 상태로의 전환을 트리거해주는 모습을 볼 수 있어요.

```tsx
// Game.tsx
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
  ));
```

### 상태에 따라 포켓몬 애니메이션 넣어주기

상태를 이용하면 애니메이션을 구현하는 것도 간편해져요.

```ts
// Game.tsx
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
```

```tsx
// Pokemon.tsx
match({ animSort, isMine })
  .with({ animSort: 'None' }, () => <div>{children}</div>)
  .with({ animSort: 'Summon', isMine: false }, () => (
    <motion.div animate={{ x: [-1200, 0] }} transition={{ duration: 2 }}>
      {children}
    </motion.div>
  ))
  .with({ animSort: 'Summon', isMine: true }, () => (
    <motion.div animate={{ scale: [0, 1], x: 0 }} transition={{ duration: 0.7 }}>
      {children}
    </motion.div>
  ))
  .with({ animSort: 'Damaged' }, () => (
    <motion.div animate={{ opacity: [0.5, 1, 0.5, 1] }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  ))
  .with({ animSort: 'Attack', isMine: false }, () => (
    <motion.div animate={{ x: [0, -30, 0], y: [0, 30, 0], opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }}>
      {children}
    </motion.div>
  ))
  .with({ animSort: 'Attack', isMine: true }, () => (
    <motion.div animate={{ x: [0, 30, 0], y: [0, -30, 0], opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }}>
      {children}
    </motion.div>
  ))
  .with({ animSort: 'Die' }, () => (
    <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 0.7 }}>
      {children}
    </motion.div>
  ))
  .otherwise(() => children);
```

어떤 애니메이션인지, 내 포켓몬인지 아닌지에 따라서 다른 애니메이션을 내려줄 수 있어요.

## 후기

프로그래밍언어개론이라는 수업에서 FSM을 처음 배웠었어요. 그 수업을 굉장히 좋아했는데 이런식으로 구현할 기회가 생겨서 좋았어요. 개인적으로 아래와 같은 장단점을 느꼈어요.

**장점**

- 재밌다
- 흐름이 직관적으로 보인다
- 사이드이펙트가 일어날 확률이 적다
- 결과가 분명한 경우에 사용한다면 효율이 좋을 것 같다

**단점**

- 설계가 복잡하다. 한번 꼬이면 재설계하기 어렵다
- 너무 단순한 구조에는 오버엔지니어링일 수 있다

앞으로 아래와 같은 것들을 좀 더 해보고 싶어요.

- xstate도입
- ~~단축키로 게임 가능하게~~ (현재 방향키와 스페이스바로 지원하고 있어요)
  - 단축키 문서
- 모바일 지원

### 링크

- [유한상태기계](https://stately.ai/viz/7bf60b0a-eb04-4946-9964-9791dce2483b)
- [소스코드](https://github.com/qkrdmstlr3/devlog)
- [게임](https://www.shellboylog.com/game)
