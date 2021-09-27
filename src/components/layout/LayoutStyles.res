module Styles = {
  open Emotion

  let layout = css({
    "position": "relative",
    "maxWidth": "1250px",
    "minHeight": "100vh",
    "margin": "0 auto",
    "padding": "30px 25px 50px 25px",
    "backgroundColor": "white",
    "overflow": "scroll",
    "@media (max-width:420px)": {
      "minHeight": "-webkit-fill-available",
      "padding": "3px 10px",
    },
  })

  let footer = css({
    "position": "absolute",
    "left": "50%",
    "bottom": "20px",
    "transform": "translateX(-50%)",
    "width": "95%",
    "display": "flex",
    "justifyContent": "space-between",
    "opacity": "0.8",
    "fontSize": "1.2rem",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "@media (max-width:420px)": {
      "width": "400px",
      "bottom": "10px",
      "fontSize": "0.8rem",
    },
  })

  let github = css({
    "textDecoration": "underline",
  })
}
