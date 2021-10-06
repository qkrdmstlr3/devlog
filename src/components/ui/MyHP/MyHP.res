open MyHPStyles

@react.component
let make = (~hp: float, ~name: string, ~currentHP: int, ~fullHP: int) => {
  <div>
    <span className={Styles.name}> {name->React.string} </span>
    <div className={Styles.hpWrapper}>
      <span className={Styles.hpText}> {`HP :`->React.string} </span>
      <div className={Styles.hpCenter}>
        {(string_of_int(currentHP) ++ ` / ` ++ string_of_int(fullHP))->React.string}
      </div>
      <div className={Styles.hpStick}> <div className={Styles.hpStickBarFunc(~hp)} /> </div>
    </div>
  </div>
}

let default = make
