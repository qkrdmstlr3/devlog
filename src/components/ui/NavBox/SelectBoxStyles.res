module Styles = {
  open Emotion

  let container = css({
    "position": "relative",
    "display": "flex",
    "height": "35%",
  })

  let navWrapper = css({
    "position": "absolute",
    "width": "52%",
    "right": "0",
    "top": "0",
    "height": "100%",
    "backgroundColor": "white",
    "paddingLeft": "2%",
  })

  let nav = css({
    "display": "flex",
    "alignContent": "space-between",
    "flexWrap": "wrap",
    "height": "100%",
    "padding": "20px",
    "@media (max-width:420px)": {
      "padding": "3px",
    },
  })

  let navItem = css({
    "display": "inline-block",
    "width": "50%",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "fontSize": "60px",
    "cursor": "pointer",
    "@media (max-width:420px)": {
      "fontSize": "1rem",
    },
  })
}
