open TextBoxStyles

@react.component
let make = (~content: string, ~clickBox: ReactEvent.Mouse.t => unit) => {
  let (text, isTypingEnd) = UseTyping.useTyping(~content)

  <div className={Styles.container}>
    <BorderBox width="100%" height="100%" onClick={clickBox}>
      <p> {text->React.string} </p>
      {isTypingEnd ? <button className={Styles.click}> {`Click`->React.string} </button> : <> </>}
    </BorderBox>
  </div>
}

let default = make
