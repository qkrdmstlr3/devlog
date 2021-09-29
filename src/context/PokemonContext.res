type pokemonSort = React | Graphql
type pokemonSkill = {
  name: string,
  damage: int,
}
type pokemonStatus = {
  sort: pokemonSort,
  name: string,
  level: int,
  fullHP: int,
  currentHP: int,
  skill: array<pokemonSkill>,
}
type contextType = {
  my: array<pokemonStatus>,
  enemy: pokemonStatus,
}

let initialValue = {
  my: [
    {
      sort: React,
      name: `리액트`,
      level: 50,
      fullHP: 20,
      currentHP: 20,
      skill: [
        {name: `스킬1`, damage: 3},
        {name: `스킬2`, damage: 5},
        {name: `-`, damage: 0},
        {name: `-`, damage: 0},
      ],
    },
    {
      sort: Graphql,
      name: `큐엘`,
      level: 50,
      fullHP: 20,
      currentHP: 20,
      skill: [
        {name: `스킬1`, damage: 3},
        {name: `스킬2`, damage: 5},
        {name: `-`, damage: 0},
        {name: `-`, damage: 0},
      ],
    },
  ],
  enemy: {
    sort: React,
    name: `리액트`,
    level: 99,
    fullHP: 50,
    currentHP: 50,
    skill: [
      {name: `스킬1`, damage: 3},
      {name: `스킬2`, damage: 4},
      {name: `스킬3`, damage: 5},
      {name: `스킬4`, damage: 6},
    ],
  },
}
let context = React.createContext(initialValue)

module Provider = {
  let provider = React.Context.provider(context)

  @react.component
  let make = (~children) => {
    React.createElement(provider, {"value": initialValue, "children": children})
  }
}
