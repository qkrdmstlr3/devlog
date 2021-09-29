open SelectBoxStyles

@react.component
let make = () => {
  let fightClickHandler = (_: ReactEvent.Mouse.t) => {
    ()
  }
  let pokemonClickHandler = (_: ReactEvent.Mouse.t) => {
    ()
  }

  <div className={Styles.container}>
    <BorderBox width="100%" height="100%" />
    <div className={Styles.navWrapper}>
      <BorderBox width="100%" height="100%">
        <nav className={Styles.nav}>
          <h2 onClick={fightClickHandler}> {`싸우기`->React.string} </h2>
          <h2> <Gatsby.link _to="/list"> {`글목록`->React.string} </Gatsby.link> </h2>
          <h2 onClick={pokemonClickHandler}> {`포켓몬`->React.string} </h2>
          <h2> {`가방`->React.string} </h2>
        </nav>
      </BorderBox>
    </div>
  </div>
}

let default = make
