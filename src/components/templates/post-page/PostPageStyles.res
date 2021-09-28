module Styles = {
  open Emotion

  // wrapper - article
  let container = css({
    "margin": "0 auto",
    "maxWidth": "800px",
    "height": "100%",
    "paddingBottom": "70px",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
  })

  let header = css({
    "display": "flex",
    "justifyContent": "space-between",
  })

  // h1
  let title = css({
    "padding": "30px 0 10px 0",
    "fontSize": "2.4rem",
    "borderBottom": "1.5px solid black",
    "@media (max-width:420px)": {
      "padding": "18px 0 10px 0",
      "fontSize": "1.7rem",
    },
  })

  // span
  let date = css({
    "paddingLeft": "20px",
    "fontSize": "1.2rem",
    "@media (max-width:420px)": {
      "paddingLeft": "10px",
      "fontSize": "0.7rem",
    },
  })

  // span
  let category = css({
    "fontSize": "2rem",
    "@media (max-width:420px)": {
      "fontSize": "1rem",
    },
  })

  let backButton = css({
    "backgroundColor": "transparent",
    "border": "none",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "fontSize": "1.5rem",
    "@media (max-width:420px)": {
      "padding": "0",
      "fontSize": "1rem",
    },
  })

  let wysiwyg = css({
    "fontFamily": "'NeoDunggeunmo', sans-serif",
  })

  let postContent = css({
    "fontFamily": "'Noto Sans KR', sans-serif",
    "img": {
      "display": "block",
      "maxWidth": "60%",
      "margin": "0 auto",
    },
    "code": {
      "background": "#EDEDEB",
      "color": "#EB5E5E",
      "fontWeight": "bold",
      "padding": "0 5px",
      "borderRadius": "5px",
      "fontSize": "15px",
    },
    "p": {
      "lineHeight": "30px",
      "fontSize": "16px",
      "margin": "10px 0",
    },
    "ul": {
      "paddingLeft": "27px",
    },
    "li": {
      "position": "relative",
      "margin": "10px 0",
      "::before": {
        "content": "''",
        "position": "absolute",
        "backgroundColor": "black",
        "left": "-15px",
        "top": "50%",
        "width": "8px",
        "height": "8px",
        "transform": "translateY(-75%)",
      },
    },
    "h1": {
      "paddingTop": "2rem",
      "margin": "0",
      "fontFamily": "NeoDunggeunmo",
    },
    "h2": {
      "paddingTop": "2rem",
      "margin": "0",
      "fontSize": "1.7rem",
      "fontFamily": "NeoDunggeunmo",
    },
    "h3": {
      "paddingTop": "1.6rem",
      "margin": "0",
      "fontSize": "1.4rem",
      "fontFamily": "NeoDunggeunmo",
    },
  })
}
