open IndexPageStyles
open GameContext

type timerId
@val external setTimeout: (unit => unit, int) => timerId = "setTimeout"
@val external clearTimeout: timerId => unit = "clearTimeout"

@react.component
let make = () => {
  let loadingTime = 2000
  let (gameState, gameDispatch) = React.useContext(GameContext.context)
  let (pokemonState, _) = React.useContext(PokemonContext.context)
  let myPokemon = React.useMemo1(() => {
    Js.Array.find((pokemon: PokemonContext.pokemonStatus) => {
      gameState.sort === pokemon.sort
    }, pokemonState.my)
  }, [gameState.sort])

  React.useEffect0(() => {
    let timeout = setTimeout(() => {
      gameDispatch(gameState.gameStatus)
    }, loadingTime)
    let cleanup = () => {clearTimeout(timeout)}
    Some(cleanup)
  })

  let boxComponent = switch (gameState.gameStatus, gameState.loading) {
  | (_, true) => <BorderBox width="100%" height="35%" />
  | (SELECT_NAV, _) => <SelectBox />
  | (FIGHT_NAV, _) => <FightBox />
  | _ => <TextBox />
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
