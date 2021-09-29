module Styles = {
  open Emotion

  let outContainerFunc = (~width: string, ~height: string) => {
    css({
      "width": width,
      "height": height,
      "position": "relative",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "overflow": "hidden",
      "border": "5px solid black",
      "borderBottom": "10px solid black",
      "borderRadius": "10px",
      "zIndex": "0",
      "backgroundColor": "white",
    })
  }

  let innerContainer = css({
    "width": "calc(100% - 15px)",
    "height": "calc(100% - 20px)",
    "padding": "10px",
    "border": "5px solid black",
    "borderTop": "10px solid black",
    "borderRadius": "10px",
    "fontSize": "50px",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "backgroundColor": "white",
  })
}
