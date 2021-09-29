@react.component
let make = () => {
  <GameContext.Provider>
    <PokemonContext.Provider> <Layout> <IndexPage /> </Layout> </PokemonContext.Provider>
  </GameContext.Provider>
}

let default = make
