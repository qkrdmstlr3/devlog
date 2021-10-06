open TextBoxStyles

@react.component
let make = (~content: string, ~clickBox: unit => unit) => {
  let (text, isTypingEnd) = UseTyping.useTyping(~content)

  let onClick = (_: ReactEvent.Mouse.t) => {
    if isTypingEnd === true {
      clickBox()
    }
  }

  <div className={Styles.container}>
    <BorderBox width="100%" height="100%" onClick={onClick}>
      <p> {text->React.string} </p>
      {isTypingEnd ? <button className={Styles.click}> {`Click`->React.string} </button> : <> </>}
    </BorderBox>
  </div>
}

let default = make
