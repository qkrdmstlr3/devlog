open FightBoxStyles

@react.component
let make = (~skills: array<PokemonContext.pokemonSkill>, ~clickSkill: int => unit) => {
  let (currentSkillIndex, setCurrentSkillIndex) = React.useState(_ => 0)

  let handleMouseEnter = (index: int) => {
    setCurrentSkillIndex(_ => index)
  }

  let skillsComponent = Js.Array.mapi((skill: PokemonContext.pokemonSkill, index: int) => {
    switch skill.skillType {
    | Some(_) =>
      <span
        key={skill.name ++ string_of_int(index)}
        className={Styles.skill}
        onMouseEnter={_ => handleMouseEnter(index)}
        onClick={_ => clickSkill(index)}>
        {currentSkillIndex === index
          ? <div className={Styles.select}> {`▶`->React.string} </div>
          : <> </>}
        {skill.name->React.string}
      </span>
    | None => <span key={skill.name ++ string_of_int(index)}> {skill.name->React.string} </span>
    }
  }, skills)

  let skillType = switch skills[currentSkillIndex].skillType {
  | Some(skillType) =>
    switch skillType {
    | Normal => `노멀`
    }
  | None => ""
  }

  <div className={Styles.container}>
    <div className={Styles.leftWrapper}>
      <BorderBox width="100%" height="100%">
        <div className={Styles.skillWrapper}> {skillsComponent->React.array} </div>
      </BorderBox>
    </div>
    <div className={Styles.rightWrapper}>
      <BorderBox width="100%" height="100%">
        <div className={Styles.skillTypeContainer}>
          {`기술타입 / `->React.string} {skillType->React.string}
        </div>
      </BorderBox>
    </div>
  </div>
}

let default = make
