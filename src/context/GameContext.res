type contextType = {
  /* 게임 로딩 중 */
  loading: bool,
  /* 게임 진행 상태 */
  gameStatus: GameType.gameStatus,
  /* 현재 내 포켓몬 종류 */
  sort: PokemonContext.pokemonSort,
  /* 내 포켓몬 스킬 index */
  mySkillIndex: int,
  /* 적 포켓몬 스킬 index */
  enemySkillIndex: int,
  /* 내 포켓몬 리스트 목록 */
  isPokemonListOpen: bool,
  /* reducer */
}

let reducer = (state: contextType, _: GameType.gameStatus) => {
  state
}

let initialValue = {
  loading: true,
  gameStatus: APPEAR_ENEMY,
  sort: PokemonContext.React,
  mySkillIndex: -1,
  enemySkillIndex: -1,
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
