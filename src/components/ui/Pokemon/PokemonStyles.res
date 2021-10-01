module Styles = {
  open Emotion

  let wrapperFunc = (~isMyPokemon: bool) => {
    css({
      "width": "90%",
      "height": "50%",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": isMyPokemon ? "center" : "flex-start",
      "marginLeft": isMyPokemon ? "10%" : "0",
    })
  }

  let person = css({
    "width": "200px",
    "height": "200px",
    "borderRadius": "100px",
    "backgroundColor": "black",
    "marginLeft": "120px",
    "@media (max-width:1024px)": {
      "marginLeft": "0px",
    },
  })
}
