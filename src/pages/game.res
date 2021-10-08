@react.component
let make = () => {
  <GameContext.Provider>
    <PokemonContext.Provider> <Layout> <GamePage /> </Layout> </PokemonContext.Provider>
  </GameContext.Provider>
}

let default = make
