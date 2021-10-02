module Styles = {
  open Emotion

  let container = css({
    "width": "400px",
    "height": "100px",
    "position": "relative",
    "backgroundColor": "black",
    "borderBottomRightRadius": "30px",
  })

  let innerWrapper = css({
    "position": "absolute",
    "bottom": "10px",
    "right": "30px",
    "height": "90px",
    "width": "370px",
    "borderBottomRightRadius": "30px",
    "backgroundColor": "white",
    "display": "flex",
    "alignItems": "center",
  })

  let ball = css({
    "overflow": "hidden",
    "width": "40px",
    "height": "40px",
    "margin": "0 9px",
    "border": "3px solid black",
    "borderRadius": "20px",
  })

  let redPart = css({
    "width": "100%",
    "height": "45%",
    "backgroundColor": "red",
  })

  let blackPart = css({
    "width": "100%",
    "height": "10%",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "black",
  })

  let centerPart = css({
    "width": "12px",
    "height": "12px",
    "border": "3px solid black",
    "borderRadius": "6px",
    "backgroundColor": "white",
  })
}
