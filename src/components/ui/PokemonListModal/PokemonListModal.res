open PokemonContext
open PokemonListModalStyles

@react.component
let make = (
  ~pokemons: array<pokemonStatus>,
  ~handleChangePokemon: GameType.pokemonSort => unit,
  ~handleClickBackButton: unit => unit,
) => {
  let (isSelected, setIsSelected) = React.useState(_ => false)
  let (selectedPokemonIndex, setSelectedPokemonIndex) = React.useState(_ => 0)

  React.useEffect1(() => {
    let isMyPokemonAllDead = Js.Array.every((pokemon: pokemonStatus) => {
      pokemon.currentHP === 0
    }, pokemons)

    if isMyPokemonAllDead {
      Gatsby.navigate("/")
    }
    None
  }, [pokemons])

  let handleMouseEnter = (index: int) => {
    let _ = switch isSelected || pokemons[index].currentHP === 0 {
    | true => ()
    | false => setSelectedPokemonIndex(_ => index)
    }
  }

  let handleClickPokemon = (index: int) => {
    let _ = switch pokemons[index].currentHP === 0 {
    | true => ()
    | false =>
      setSelectedPokemonIndex(_ => index)
      setIsSelected(before => !before)
    }
  }

  let pokemonsComponent = Js.Array.mapi((pokemon: pokemonStatus, index: int) => {
    let pokemonIcon = switch pokemon.sort {
    | GameType.React => Icon.ReactIcon
    | GameType.Graphql => Icon.GraphqlIcon
    }

    <div key={pokemon.name}>
      <div
        className={Styles.pokemon}
        onClick={_ => handleClickPokemon(index)}
        onMouseEnter={_ => handleMouseEnter(index)}>
        <div className={Styles.leftWrapper}>
          {selectedPokemonIndex === index
            ? <div className={Styles.select}> {`▶`->React.string} </div>
            : <> </>}
          <div className={Styles.iconWrapper}> <Icon icon={pokemonIcon} /> </div>
          {(pokemon.name ++ `: L` ++ string_of_int(pokemon.level))->React.string}
        </div>
        <div className={Styles.hpWrapper}>
          <span className={Styles.hpNumber}>
            {(string_of_int(pokemon.currentHP) ++ ` / ` ++ string_of_int(pokemon.fullHP))
              ->React.string}
          </span>
          <div
            className={Styles.hpBarFunc(
              ~hp=float_of_int(pokemon.currentHP) /. float_of_int(pokemon.fullHP) *. 100.0,
            )}
          />
        </div>
      </div>
    </div>
  }, pokemons)

  <div className={Styles.container}>
    <ul> {pokemonsComponent->React.array} </ul>
    <BorderBox width="100%" height="35%">
      {`포켓몬을 선택하세요`->React.string}
    </BorderBox>
    {isSelected
      ? <div className={Styles.selectWrapper}>
          <BorderBox width="100%" height="100%">
            <ul>
              <li
                className={Styles.selectMenu}
                onClick={_ => handleChangePokemon(pokemons[selectedPokemonIndex].sort)}>
                {`교체하기`->React.string}
              </li>
              <li className={Styles.selectMenu} onClick={_ => handleClickBackButton()}>
                {`전투로 돌아가기`->React.string}
              </li>
            </ul>
          </BorderBox>
        </div>
      : <> </>}
  </div>
}

let default = make
