type gameStatus =
  /* 초기 렌더링 (야생의 ~가 나타났다!) [TextBox Component] */
  | APPEAR_ENEMY
  /* 포켓몬 소환 (가랏 ~~~!) [TextBox Component] */
  | SUMMON_MY
  /* 선택지 화면 (싸우기 가방 글목록) [SelectBox Component] */
  | SELECT_NAV
  /* 선택지 화면 (싸우기 선택지) [FightBox Component] */
  | FIGHT_NAV
  /* 상대 포켓몬 공격 [TextBox Component] */
  | ENEMY_ATTACK
  /* 내 포켓몬의 닳은 체력 [TextBox Component] */
  | MY_DAMAGE
  /* 내 포켓몬 공격 [TextBox Component] */
  | MY_ATTACK
  /* 적 포켓몬의 닳은 체력 [TextBox Component] */
  | EMENY_DAMAGE
  /* 적 포켓몬 죽음 [TextBox Component] */
  | ENEMY_DEAD
  /* 내 포켓몬 죽음 [TextBox Component] */
  | MY_DEAD
  /* 포켓몬 교체 [TextBox Component] */
  | CHANGE_POKEMON
  /* 게임 종료 */
  | FINISH_GAME

type contextType = {
  /* 게임 로딩 중 */
  loading: bool,
  /* 게임 진행 상태 */
  gameStatus: gameStatus,
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

let reducer = (state: contextType, _: gameStatus) => {
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
