open GameType

let getGameStatusText = (
  ~gameState: GameContext.contextType,
  ~myPokemon: PokemonContext.pokemonStatus,
  ~enemyPokemon: PokemonContext.pokemonStatus,
) => {
  switch gameState.gameStatus {
  | LOADING => ""
  | APPEAR_ENEMY => `앗! 야생의\n ` ++ enemyPokemon.name ++ `(이)가 나타났다!`
  | SUMMON_MY | CHANGE_POKEMON(_) => `가랏! ` ++ myPokemon.name ++ `!`
  | ENEMY_ATTACK =>
    let skillName = enemyPokemon.skill[enemyPokemon.skillIndex].name
    `야생의 ` ++ enemyPokemon.name ++ `의 ` ++ skillName ++ `!`
  | MY_DAMAGE(_) => `내 ` ++ myPokemon.name ++ `(이)가 피해를 입었다!`
  | MY_ATTACK =>
    let skillName = myPokemon.skill[myPokemon.skillIndex].name
    `내 ` ++ myPokemon.name ++ `의 ` ++ skillName ++ `!`
  | ENEMY_DAMAGE(_) => `야생의 ` ++ myPokemon.name ++ `(이)가 피해를 입었다!`
  | FINISH_GAME => `목록으로 이동한다!!`
  | MY_DEAD => `내 ` ++ myPokemon.name ++ `(이)가 쓰러졌다!`
  | SELECT_NAV | FIGHT_NAV | _ => ""
  }
}
