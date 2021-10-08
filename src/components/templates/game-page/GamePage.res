open GamePageStyles
open GameContext

@react.component
let make = () => {
  let loadingTime = 2000
  let (gameState, gameDispatch) = React.useContext(GameContext.context)
  let (pokemonState, pokemonDispatch) = React.useContext(PokemonContext.context)
  let myPokemon = Js.Array.find((pokemon: PokemonContext.pokemonStatus) => {
    gameState.sort === pokemon.sort
  }, pokemonState.my)

  React.useEffect0(() => {
    let timeout = Timeout.setTimeout(() => {
      gameDispatch({customGameStatus: None})
    }, loadingTime)
    let cleanup = () => {Timeout.clearTimeout(timeout)}
    Some(cleanup)
  })

  let textBoxClick = () => {
    let _ = switch gameState.gameStatus {
    | MY_DAMAGE(_) =>
      switch myPokemon {
      | Some(myPokemon) => gameDispatch({customGameStatus: Some(MY_DAMAGE(myPokemon.alive))})
      | None => ()
      }
    | ENEMY_DAMAGE(_) =>
      gameDispatch({customGameStatus: Some(ENEMY_DAMAGE(pokemonState.enemy.alive))})
    | _ => gameDispatch({customGameStatus: None})
    }
    pokemonDispatch({
      gameStatus: gameState.gameStatus,
      currentMyPokemon: gameState.sort,
      mySkillIndex: None,
      enemySkillIndex: None,
    })
  }

  let selectBoxFightClick = (_: ReactEvent.Mouse.t) => {
    gameDispatch({customGameStatus: Some(FIGHT_NAV)})
  }

  let fightBoxSkillClick = (skillIndex: int) => {
    let randomEnemySkillIndex = Js.Math.floor(Js.Math.random() *. 4.0)
    pokemonDispatch({
      gameStatus: gameState.gameStatus,
      currentMyPokemon: gameState.sort,
      mySkillIndex: Some(skillIndex),
      enemySkillIndex: Some(randomEnemySkillIndex),
    })
    gameDispatch({customGameStatus: None})
  }

  let openPokemonListModal = () => {
    gameDispatch({customGameStatus: Some(POKEMON_LIST)})
  }

  let handleReturnSelectNav = () => {
    gameDispatch({customGameStatus: Some(SELECT_NAV)})
  }

  let handleChangePokemon = (sort: GameType.pokemonSort) => {
    let _ = switch sort === gameState.sort {
    | true => handleReturnSelectNav()
    | false => gameDispatch({customGameStatus: Some(CHANGE_POKEMON(sort))})
    }
  }

  let boxComponent = switch (gameState.gameStatus, gameState.loading) {
  | (_, true) => <BorderBox width="100%" height="35%" />
  | (SELECT_NAV, _) =>
    <SelectBox clickFight={selectBoxFightClick} openPokemonListModal={openPokemonListModal} />
  | (FIGHT_NAV, _) =>
    let skills = switch myPokemon {
    | Some(myPokemon) => myPokemon.skill
    | None => []
    }
    <FightBox skills={skills} clickSkill={fightBoxSkillClick} />
  | _ =>
    let content = switch myPokemon {
    | Some(myPokemon) =>
      GameText.getGameStatusText(~gameState, ~myPokemon, ~enemyPokemon=pokemonState.enemy)
    | None => ""
    }
    <TextBox content={content} clickBox={textBoxClick} />
  }

  switch (myPokemon, gameState.isPokemonListOpen) {
  | (Some(myPokemon), false) =>
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
  | (Some(_), true) =>
    <PokemonListModal
      pokemons={pokemonState.my}
      handleChangePokemon={handleChangePokemon}
      handleClickBackButton={handleReturnSelectNav}
    />
  | _ => <> {`error`->React.string} </>
  }
}

let default = make
