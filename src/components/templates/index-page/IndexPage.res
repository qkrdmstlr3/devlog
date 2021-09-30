open IndexPageStyles
open GameContext

@react.component
let make = () => {
  let (gameState, _) = React.useContext(GameContext.context)

  let boxComponent = switch (gameState.gameStatus, gameState.loading) {
  | (_, true) => <BorderBox width="100%" height="35%" />
  | (SELECT_NAV, _) => <SelectBox />
  | (FIGHT_NAV, _) => <FightBox />
  | _ => <TextBox />
  }
  <div className={Styles.container}> <div className={Styles.pokemonWrapper} /> boxComponent </div>
}

let default = make
