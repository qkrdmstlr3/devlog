open GameType

let getGameStatusText = (
  ~gameState: GameContext.contextType,
  ~myPokemon: PokemonContext.pokemonStatus,
  ~enemyPokemon: PokemonContext.pokemonStatus,
) => {
  switch gameState.gameStatus {
  | LOADING => ""
  | APPEAR_ENEMY => `앗! 야생의\n ` ++ enemyPokemon.name ++ `(이)가 나타났다!`
  | SUMMON_MY | CHANGE_POKEMON => `가랏! ` ++ myPokemon.name ++ `!`
  | ENEMY_ATTACK =>
    let skillName = enemyPokemon.skill[gameState.enemySkillIndex].name
    `야생의 ` ++ enemyPokemon.name ++ `의 ` ++ skillName ++ `!`
  | MY_DAMAGE(damageType) =>
    switch damageType {
    | DEAD => `내 ` ++ myPokemon.name ++ `(이)가 쓰러졌다!`
    | ALIVE => `내 ` ++ myPokemon.name ++ `(이)가 피해를 입었다!`
    }
  | MY_ATTACK =>
    let skillName = myPokemon.skill[gameState.mySkillIndex].name
    `내 ` ++ myPokemon.name ++ `의 ` ++ skillName ++ `!`
  | EMENY_DAMAGE(damageType) =>
    switch damageType {
    | DEAD => `야생의 ` ++ myPokemon.name ++ `(은)는 쓰러졌다!`
    | ALIVE => `야생의 ` ++ myPokemon.name ++ `(이)가 피해를 입었다!`
    }
  | FINISH_GAME => `목록으로 이동한다!!`
  | SELECT_NAV | FIGHT_NAV | _ => ""
  }
}
