open TextBoxStyles

@react.component
let make = () => {
  // FIXME: content 동적으로 변경
  let (text, isTypingEnd) = UseTyping.useTyping(
    ~content=`앗! 야생의 리액트이(가) 나타났다!`,
  )
  let clickBorderBox = (_: ReactEvent.Mouse.t) => {
    ()
  }

  <div className={Styles.container}>
    <BorderBox width="100%" height="100%" onClick={clickBorderBox}>
      <p> {text->React.string} </p>
      {isTypingEnd ? <button className={Styles.click}> {`Click`->React.string} </button> : <> </>}
    </BorderBox>
  </div>
}

let default = make
