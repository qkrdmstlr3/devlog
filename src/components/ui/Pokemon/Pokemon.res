open PokemonStyles

@react.component
let make = (
  ~loading: bool,
  ~isMyPokemon: bool,
  ~pokemon: PokemonContext.pokemonStatus,
  ~gameStatus: GameType.gameStatus,
) => {
  let pokemonIcon = switch pokemon.sort {
  | PokemonContext.React => Icon.ReactIcon
  | PokemonContext.Graphql => Icon.GraphqlIcon
  }

  switch isMyPokemon {
  | true =>
    switch gameStatus {
    | CHANGE_POKEMON => <> </>
    | APPEAR_ENEMY | SUMMON_MY =>
      <div className={Styles.wrapperFunc(~isMyPokemon)}>
        <div className={Styles.person} /> {loading ? <div /> : <div />}
      </div>
    | _ =>
      <div className={Styles.wrapperFunc(~isMyPokemon)}>
        <Icon icon={pokemonIcon} />
        <MyHP
          hp={pokemon.currentHP / pokemon.fullHP * 100}
          name={pokemon.name ++ `: L` ++ string_of_int(pokemon.level)}
          currentHP={pokemon.currentHP}
          fullHP={pokemon.fullHP}
        />
      </div>
    }
  | false =>
    <div className={Styles.wrapperFunc(~isMyPokemon)}>
      {loading
        ? <div />
        : <EnemyHP
            hp={pokemon.currentHP / pokemon.fullHP * 100}
            name={pokemon.name ++ `: L` ++ string_of_int(pokemon.level)}
          />}
      <div> <Icon icon={pokemonIcon} /> </div>
    </div>
  }
}

let default = make
