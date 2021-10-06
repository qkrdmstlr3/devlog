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
  alive: GameType.isAlive,
  skillIndex: int,
  skill: array<pokemonSkill>,
}
type contextType = {
  my: array<pokemonStatus>,
  enemy: pokemonStatus,
}

type actionType = {
  gameStatus: GameType.gameStatus,
  currentMyPokemon: pokemonSort,
  mySkillIndex: option<int>,
  enemySkillIndex: option<int>,
}

let reducer = (state: contextType, action: actionType) => {
  switch action.gameStatus {
  | ENEMY_ATTACK =>
    let myPokemon = Js.Array.map((pokemon: pokemonStatus) => {
      if pokemon.sort === action.currentMyPokemon {
        let currentHP = pokemon.currentHP - state.enemy.skill[state.enemy.skillIndex].damage
        switch currentHP <= 0 {
        | true => {...pokemon, currentHP: 0, alive: DEAD}
        | false => {...pokemon, currentHP: currentHP}
        }
      } else {
        pokemon
      }
    }, state.my)
    {...state, my: myPokemon}
  | MY_ATTACK =>
    let myPokemon = Js.Array.find((pokemon: pokemonStatus) => {
      pokemon.sort === action.currentMyPokemon
    }, state.my)
    switch myPokemon {
    | Some(myPokemon) =>
      let currentHP = state.enemy.currentHP - myPokemon.skill[myPokemon.skillIndex].damage
      switch currentHP <= 0 {
      | true => {...state, enemy: {...state.enemy, currentHP: 0, alive: DEAD}}
      | false => {...state, enemy: {...state.enemy, currentHP: currentHP}}
      }
    | None => state
    }
  | FIGHT_NAV =>
    switch (action.mySkillIndex, action.enemySkillIndex) {
    | (Some(mySkillIndex), Some(enemySkillIndex)) =>
      let myPokemon = Js.Array.map((pokemon: pokemonStatus) => {
        if pokemon.sort === action.currentMyPokemon {
          {...pokemon, skillIndex: mySkillIndex}
        } else {
          pokemon
        }
      }, state.my)
      {my: myPokemon, enemy: {...state.enemy, skillIndex: enemySkillIndex}}
    | _ => state
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
      alive: ALIVE,
      skillIndex: -1,
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
      alive: ALIVE,
      skillIndex: -1,
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
    alive: ALIVE,
    skillIndex: -1,
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
