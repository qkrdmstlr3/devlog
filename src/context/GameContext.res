open GameType

type contextType = {
  /* 게임 로딩 중 */
  loading: bool,
  /* 게임 진행 상태 */
  gameStatus: GameType.gameStatus,
  /* 현재 내 포켓몬 종류 */
  sort: GameType.pokemonSort,
  /* 내 포켓몬 리스트 목록 */
  isPokemonListOpen: bool,
}

type actionType = {
  currentGameStatus: option<GameType.gameStatus>,
  afterGameStatus: option<GameType.gameStatus>,
}

let reducer = (state: contextType, action: actionType) => {
  switch (action.currentGameStatus, action.afterGameStatus) {
  | (None, Some(afterGameStatus)) => {...state, gameStatus: afterGameStatus}
  | (Some(currentGameStatus), None) =>
    switch currentGameStatus {
    | LOADING => {...state, gameStatus: APPEAR_ENEMY, loading: false}
    | APPEAR_ENEMY => {...state, gameStatus: SUMMON_MY}
    | SELECT_NAV => {...state, isPokemonListOpen: !state.isPokemonListOpen}
    | SUMMON_MY | CHANGE_POKEMON => {...state, gameStatus: SELECT_NAV}
    | POKEMON_LIST(sort) => {
        ...state,
        gameStatus: CHANGE_POKEMON,
        sort: sort,
        isPokemonListOpen: false,
      }
    | ENEMY_ATTACK => {...state, gameStatus: MY_DAMAGE(BLANK)}
    | MY_DAMAGE(deadOrAlive) =>
      switch deadOrAlive {
      | ALIVE => {...state, gameStatus: MY_ATTACK}
      | DEAD => {...state, gameStatus: MY_DEAD}
      | BLANK => state
      }
    | MY_ATTACK => {...state, gameStatus: ENEMY_DAMAGE(BLANK)}
    | ENEMY_DAMAGE(deadOrAlive) =>
      switch deadOrAlive {
      | ALIVE => {...state, gameStatus: SELECT_NAV}
      | DEAD => {...state, gameStatus: ENEMY_DEAD}
      | BLANK => state
      }
    | MY_DEAD => {...state, isPokemonListOpen: true}
    | ENEMY_DEAD => {...state, gameStatus: FINISH_GAME}
    | _ => state
    }
  | _ => state
  }
}

let initialValue = {
  loading: true,
  gameStatus: LOADING,
  sort: GameType.React,
  isPokemonListOpen: false,
}
let context = React.createContext((initialValue, ignore))

module Provider = {
  let provider = React.Context.provider(context)

  @react.component
  let make = (~children) => {
    let (state, dispatch) = React.useReducer(reducer, initialValue)

    React.createElement(provider, {"value": (state, dispatch), "children": children})
  }
}
