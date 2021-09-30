open TextBoxStyles

@react.component
let make = () => {
  let clickBorderBox = (_: ReactEvent.Mouse.t) => {
    ()
  }

  <div className={Styles.container}>
    <BorderBox width="100%" height="100%" onClick={clickBorderBox}>
      <p> {`text`->React.string} </p>
      <button className={Styles.click}> {`Click`->React.string} </button>
    </BorderBox>
  </div>
}

let default = make
