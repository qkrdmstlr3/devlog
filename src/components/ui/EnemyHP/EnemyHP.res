open EnemyHPStyles

@react.component
let make = (~hp: int, ~name: string) => {
  <div>
    <span className={Styles.name}> {name->React.string} </span>
    <div className={Styles.hpWrapper}>
      <div className={Styles.hpWrapperInner}>
        <div className={Styles.hpBar}>
          <span className={Styles.hpText}> {`HP :`->React.string} </span>
          <div className={Styles.hpStick}> <div className={Styles.hpStickBarFunc(~hp)} /> </div>
        </div>
      </div>
    </div>
  </div>
}

let default = make
