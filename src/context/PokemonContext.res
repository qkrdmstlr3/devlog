type pokemonSort = React | Graphql
type skillType = Normal
type pokemonSkill = {
  name: string,
  damage: int,
  skillType: option<skillType>,
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

type actionType = {
  gameStatus: GameType.gameStatus,
  currentMyPokemon: pokemonSort,
  mySkillIndex: int,
  enemySkillIndex: int,
}

let reducer = (state: contextType, action: actionType) => {
  switch action.gameStatus {
  | MY_DAMAGE(_) =>
    let myPokemon = Js.Array.map((pokemon: pokemonStatus) => {
      if pokemon.sort === action.currentMyPokemon {
        let currentHP = pokemon.currentHP - state.enemy.skill[action.enemySkillIndex].damage
        {...pokemon, currentHP: currentHP}
      } else {
        pokemon
      }
    }, state.my)
    {...state, my: myPokemon}
  | EMENY_DAMAGE(_) =>
    let myPokemon = Js.Array.find((pokemon: pokemonStatus) => {
      pokemon.sort === action.currentMyPokemon
    }, state.my)
    switch myPokemon {
    | Some(myPokemon) =>
      let currentHP = state.enemy.currentHP - myPokemon.skill[action.mySkillIndex].damage
      {...state, enemy: {...state.enemy, currentHP: currentHP}}
    | None => state
    }
  | _ => state
  }
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
        {name: `스킬1`, damage: 3, skillType: Some(Normal)},
        {name: `스킬2`, damage: 5, skillType: Some(Normal)},
        {name: `-`, damage: 0, skillType: None},
        {name: `-`, damage: 0, skillType: None},
      ],
    },
    {
      sort: Graphql,
      name: `큐엘`,
      level: 50,
      fullHP: 20,
      currentHP: 20,
      skill: [
        {name: `스킬1`, damage: 3, skillType: Some(Normal)},
        {name: `스킬2`, damage: 5, skillType: Some(Normal)},
        {name: `-`, damage: 0, skillType: None},
        {name: `-`, damage: 0, skillType: None},
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
      {name: `스킬1`, damage: 3, skillType: Some(Normal)},
      {name: `스킬2`, damage: 4, skillType: Some(Normal)},
      {name: `스킬3`, damage: 5, skillType: Some(Normal)},
      {name: `스킬4`, damage: 6, skillType: Some(Normal)},
    ],
  },
}
let context = React.createContext((initialValue, ignore))

module Provider = {
  let provider = React.Context.provider(context)

  @react.component
  let make = (~children) => {
    let (state, dispatch) = React.useReducer(reducer, initialValue)

    React.createElement(provider, {"value": (state, dispatch), "children": children})
  }
}
