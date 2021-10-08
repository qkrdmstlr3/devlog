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
  /* 타입을 추가적으로 받는 등 부가적인 동작이 필요한 경우 */
  customGameStatus: option<GameType.gameStatus>,
}

let reducer = (state: contextType, action: actionType) => {
  switch action.customGameStatus {
  | Some(customGameStatus) =>
    switch customGameStatus {
    | SELECT_NAV => {
        ...state,
        gameStatus: customGameStatus,
        isPokemonListOpen: !state.isPokemonListOpen,
      }
    | POKEMON_LIST => {...state, gameStatus: customGameStatus, isPokemonListOpen: true}
    | CHANGE_POKEMON(sort) => {
        ...state,
        gameStatus: CHANGE_POKEMON(sort),
        sort: sort,
        isPokemonListOpen: false,
      }
    | MY_DAMAGE(deadOrAlive) =>
      switch deadOrAlive {
      | ALIVE => {...state, gameStatus: MY_ATTACK}
      | DEAD => {...state, gameStatus: MY_DEAD}
      | BLANK => state
      }
    | ENEMY_DAMAGE(deadOrAlive) =>
      switch deadOrAlive {
      | ALIVE => {...state, gameStatus: SELECT_NAV}
      | DEAD => {...state, gameStatus: ENEMY_DEAD}
      | BLANK => state
      }
    | _ => {...state, gameStatus: customGameStatus}
    }
  | None =>
    switch state.gameStatus {
    | LOADING => {...state, gameStatus: APPEAR_ENEMY, loading: false}
    | APPEAR_ENEMY => {...state, gameStatus: SUMMON_MY}
    | SUMMON_MY | CHANGE_POKEMON(_) => {...state, gameStatus: SELECT_NAV}
    | FIGHT_NAV => {...state, gameStatus: ENEMY_ATTACK}
    | ENEMY_ATTACK => {...state, gameStatus: MY_DAMAGE(BLANK)}
    | MY_ATTACK => {...state, gameStatus: ENEMY_DAMAGE(BLANK)}
    | MY_DEAD => {...state, isPokemonListOpen: true}
    | ENEMY_DEAD => {...state, gameStatus: FINISH_GAME}
    | _ => state
    }
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
