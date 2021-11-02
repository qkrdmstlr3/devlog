type pokemonSort = React | Graphql | TypeScript
type isAlive = DEAD | ALIVE | BLANK
type gameStatus =
  /* 로딩 중 */
  | LOADING
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
  | MY_DAMAGE(isAlive)
  /* 내 포켓몬 공격 [TextBox Component] */
  | MY_ATTACK
  /* 적 포켓몬의 닳은 체력 [TextBox Component] */
  | ENEMY_DAMAGE(isAlive)
  /* 적 포켓몬 죽음 [TextBox Component] */
  | ENEMY_DEAD
  /* 내 포켓몬 죽음 [TextBox Component] */
  | MY_DEAD
  /* 포켓몬 리스트 모달 */
  | POKEMON_LIST
  /* 포켓몬 교체 [TextBox Component] */
  | CHANGE_POKEMON(pokemonSort)
  /* 게임 종료 */
  | FINISH_GAME
