open PokemonStyles

@react.component
let make = (
  ~loading: bool,
  ~isMyPokemon: bool,
  ~pokemon: PokemonContext.pokemonStatus,
  ~gameStatus: GameType.gameStatus,
) => {
  let (didMount, setDidMount) = React.useState(_ => false)
  let pokemonIcon = switch pokemon.sort {
  | PokemonContext.React => Icon.ReactIcon
  | PokemonContext.Graphql => Icon.GraphqlIcon
  }

  React.useEffect0(() => {
    let timeout = Timeout.setTimeout(() => {
      setDidMount(_ => true)
    }, 0)
    let cleanup = () => {Timeout.clearTimeout(timeout)}
    Some(cleanup)
  })

  switch isMyPokemon {
  | true =>
    switch gameStatus {
    | CHANGE_POKEMON => <> </>
    | LOADING | APPEAR_ENEMY | SUMMON_MY =>
      <div
        className={Styles.wrapperFunc(~isMyPokemon, ~xPosition={loading && !didMount ? 1200 : 0})}>
        <div className={Styles.person} /> {loading ? <div /> : <MonsterBall />}
      </div>
    | _ =>
      <div className={Styles.wrapperFunc(~isMyPokemon, ~xPosition=0)}>
        <Icon icon={pokemonIcon} />
        <MyHP
          hp={float_of_int(pokemon.currentHP) /. float_of_int(pokemon.fullHP) *. 100.0}
          name={pokemon.name ++ `: L` ++ string_of_int(pokemon.level)}
          currentHP={pokemon.currentHP}
          fullHP={pokemon.fullHP}
        />
      </div>
    }
  | false =>
    <div
      className={Styles.wrapperFunc(~isMyPokemon, ~xPosition={loading && !didMount ? -1200 : 0})}>
      {loading
        ? <div />
        : <EnemyHP
            hp={float_of_int(pokemon.currentHP) /. float_of_int(pokemon.fullHP) *. 100.0}
            name={pokemon.name ++ `: L` ++ string_of_int(pokemon.level)}
          />}
      <div> <Icon icon={pokemonIcon} /> </div>
    </div>
  }
}

let default = make
