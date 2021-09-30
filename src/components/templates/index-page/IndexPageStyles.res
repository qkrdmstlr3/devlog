module Styles = {
  open Emotion

  let container = css({
    "display": "flex",
    "flexDirection": "column",
    "position": "absolute",
    "top": "30px",
    "bottom": "50px",
    "left": "25px",
    "right": "25px",
  })

  let pokemonWrapper = css({
    "height": "65%",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
  })
}
