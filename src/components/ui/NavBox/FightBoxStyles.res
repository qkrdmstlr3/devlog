module Styles = {
  open Emotion

  let container = css({
    "position": "relative",
    "display": "flex",
    "height": "35%",
  })

  let leftWrapper = css({
    "position": "absolute",
    "left": "0",
    "bottom": "0",
    "width": "50%",
    "height": "150%",
  })

  let rightWrapper = css({
    "position": "absolute",
    "right": "0",
    "bottom": "0",
    "width": "50%",
    "height": "100%",
  })

  let skillWrapper = css({
    "height": "100%",
    "paddingLeft": "50px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-around",
  })

  let skill = css({
    "position": "relative",
    "cursor": "pointer",
  })

  let select = css({
    "position": "absolute",
    "marginRight": "15px",
    "left": "-60px",
  })

  let skillTypeContainer = css({
    "height": "100%",
    "display": "flex",
    "alignItems": "flex-end",
    "padding": "20px",
  })
}
