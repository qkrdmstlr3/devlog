module Styles = {
  open Emotion

  let container = css({
    "position": "absolute",
    "top": "30px",
    "bottom": "50px",
    "left": "25px",
    "right": "25px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
  })

  // pokemonList = ul

  // li
  let pokemon = css({
    "display": "flex",
    "height": "80px",
    "alignItems": "center",
    "justifyContent": "space-between",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "fontSize": "2rem",
    "cursor": "pointer",
  })

  let select = css({
    "fontSize": "3rem",
  })

  let leftWrapper = css({
    "display": "flex",
    "position": "relative",
    "alignItems": "center",
  })

  let iconWrapper = css({
    "width": "80px",
    "marginRight": "20px",
  })

  let hpWrapper = css({
    "width": "30%",
    "display": "flex",
    "flexDirection": "column",
  })

  // span
  let hpNumber = css({
    "display": "block",
    "width": "100%",
    "textAlign": "center",
  })

  let hpBarFunc = (~hp: float) =>
    css({
      "width": Js.Float.toString(hp) ++ "%",
      "height": "20px",
      "backgroundColor": BarColor.getBarColor(~percentage=hp),
      "borderRadius": "5px",
    })

  let selectWrapper = css({
    "position": "absolute",
    "width": "50%",
    "height": "35%",
    "right": "0",
    "bottom": "0",
    "paddingLeft": "2%",
    "backgroundColor": "white",
  })

  // selectList = ul

  let selectMenu = css({
    "marginBottom": "20px",
    "cursor": "pointer",
  })
}
