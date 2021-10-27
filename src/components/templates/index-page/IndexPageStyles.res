module Styles = {
  open Emotion

  // wrapper - div
  let container = css({
    "userSelect": "none",
    "margin": "0 auto",
    "marginBottom": "50px",
    "width": "calc(100% - 50px)",
    "display": "flex",
    "flexDirection": "column",
    "@media (max-width:420px)": {
      "width": "calc(100% - 20px)",
      "top": "10px",
      "bottom": "0",
    },
  })

  // itemWrapper - ul
  let postList = css({
    "display": "flex",
    "flexDirection": "column",
  })

  // itemContainer - li
  let postItem = css({
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "padding": "30px 0",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "cursor": "pointer",
    "borderTop": "1px solid black",
    "@media (max-width:420px)": {
      "padding": "15px 0",
    },
  })

  // ItemCategory - div
  let postCategory = css({
    "textAlign": "center",
    "fontSize": "1.4rem",
    "@media (max-width:420px)": {
      "fontSize": "0.8rem",
    },
  })

  // ItemTitle - h2
  let postTitle = css({
    "fontSize": "1.8rem",
    "textAlign": "center",
    "@media (max-width:420px)": {
      "fontSize": "1rem",
    },
  })

  // ItemContent - p
  let postContent = css({
    "width": "70%",
    "margin": "0 auto",
    "display": "-webkit-box",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "WebkitLineClamp": "2",
    "WebkitBoxOrient": "vertical",
    "fontSize": "1.1rem",
    "opacity": "0.6",
    "@media (max-width:420px)": {
      "fontSize": "0.6rem",
      "width": "100%",
    },
  })

  // ListWrapper - ul
  let categoryList = css({
    "display": "flex",
    "flexWrap": "wrap",
    "padding": "5px 40px 20px 40px",
    "@media (max-width:420px)": {
      "padding": "5px 10px",
    },
  })

  // ListName - li
  let categoryItem = css({
    "position": "relative",
    "paddingRight": "100px",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "fontSize": "30px",
    "cursor": "pointer",
    "@media (max-width:420px)": {
      "fontSize": "1.2rem",
      "paddingRight": "25px",
    },
  })

  // div
  let select = css({
    "position": "absolute",
    "left": "-45px",
    "top": "50%",
    "transform": "translateY(-50%)",
    "fontSize": "30px",
    "@media (max-width:420px)": {
      "fontSize": "1rem",
      "transform": "translateY(-60%)",
      "left": "-18px",
    },
  })

  // span
  let backButton = css({
    "marginBottom": "15px",
    "fontSize": "20px",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "backgroundColor": "transparent",
    "border": "none",
    "cursor": "pointer",
    "@media (max-width:420px)": {
      "fontSize": "13px",
    },
  })
}
