let useTyping = (~content: string) => {
  let typingMilliseconds = 60
  let (text, setText) = React.useState(_ => "")
  let (isTypingEnd, setIsTypingEnd) = React.useState(_ => false)

  let rec typingText = (~index) => {
    setText(txt =>
      switch index {
      | 0 => Js.String2.get(content, index)
      | _ => txt ++ Js.String2.get(content, index)
      }
    )

    let _ = Timeout.setTimeout(() => {
      if index < Js.String2.length(content) - 1 {
        typingText(~index=index + 1)
      }
    }, typingMilliseconds)

    setIsTypingEnd(_ => true)
  }

  React.useEffect1(() => {
    setIsTypingEnd(_ => false)
    typingText(~index=0)
    None
  }, [content])

  (text, isTypingEnd)
}
