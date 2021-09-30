open FightBoxStyles

@react.component
let make = () => {
  <div className={Styles.container}>
    <div className={Styles.leftWrapper}>
      <BorderBox width="100%" height="100%"> <div className={Styles.skillWrapper} /> </BorderBox>
    </div>
    <div className={Styles.rightWrapper}>
      <BorderBox width="100%" height="100%">
        <div className={Styles.skillTypeContainer}> {`기술타입 / `->React.string} </div>
      </BorderBox>
    </div>
  </div>
}

let default = make
