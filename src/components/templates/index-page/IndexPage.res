open IndexPageStyles
open GameContext

@react.component
let make = () => {
  let loadingTime = 2000
  let (gameState, gameDispatch) = React.useContext(GameContext.context)
  let (pokemonState, pokemonDispatch) = React.useContext(PokemonContext.context)
  let myPokemon = React.useMemo1(() => {
    Js.Array.find((pokemon: PokemonContext.pokemonStatus) => {
      gameState.sort === pokemon.sort
    }, pokemonState.my)
  }, [gameState.sort])

  React.useEffect0(() => {
    let timeout = Timeout.setTimeout(() => {
      gameDispatch(gameState.gameStatus)
    }, loadingTime)
    let cleanup = () => {Timeout.clearTimeout(timeout)}
    Some(cleanup)
  })

  let textBoxClick = (_: ReactEvent.Mouse.t) => {
    gameDispatch(gameState.gameStatus)
    pokemonDispatch({
      gameStatus: gameState.gameStatus,
      currentMyPokemon: gameState.sort,
      mySkillIndex: gameState.enemySkillIndex,
      enemySkillIndex: gameState.mySkillIndex,
    })
  }

  let boxComponent = switch (gameState.gameStatus, gameState.loading) {
  | (_, true) => <BorderBox width="100%" height="35%" />
  | (SELECT_NAV, _) => <SelectBox />
  | (FIGHT_NAV, _) => <FightBox />
  | _ =>
    let content = switch myPokemon {
    | Some(myPokemon) =>
      GameText.getGameStatusText(~gameState, ~myPokemon, ~enemyPokemon=pokemonState.enemy)
    | None => ""
    }
    <TextBox content={content} clickBox={textBoxClick} />
  }

  switch myPokemon {
  | Some(myPokemon) =>
    <div className={Styles.container}>
      <div className={Styles.pokemonWrapper}>
        <Pokemon
          isMyPokemon={false}
          loading={gameState.loading}
          pokemon={pokemonState.enemy}
          gameStatus={gameState.gameStatus}
        />
        <Pokemon
          loading={gameState.loading}
          isMyPokemon={true}
          pokemon={myPokemon}
          gameStatus={gameState.gameStatus}
        />
      </div>
      boxComponent
    </div>
  | None => <> {`error`->React.string} </>
  }
}

let default = make
