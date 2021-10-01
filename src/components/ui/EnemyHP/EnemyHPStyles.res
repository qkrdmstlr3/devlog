module Styles = {
  open Emotion

  let name = css({
    "display": "inline-block",
    "width": "450px",
    "textAlign": "right",
    "fontSize": "50px",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "fontWeight": "bold",
    "@media (max-width:1024px)": {
      "width": "300px",
      "fontSize": "2.5rem",
    },
    "@media (max-width:420px)": {
      "width": "150px",
      "fontSize": "1.2rem",
    },
  })

  let hpWrapper = css({
    "position": "relative",
    "width": "600px",
    "height": "120px",
    "backgroundColor": "black",
    "borderBottomLeftRadius": "30px",
    "@media (max-width:1024px)": {
      "width": "400px",
      "height": "100px",
    },
    "@media (max-width:420px)": {
      "width": "180px",
      "height": "50px",
      "borderBottomLeftRadius": "15px",
    },
  })

  let hpWrapperInner = css({
    "position": "absolute",
    "top": "0",
    "right": "0",
    "width": "570px",
    "height": "110px",
    "backgroundColor": "white",
    "borderBottomLeftRadius": "30px",
    "@media (max-width:1024px)": {
      "width": "370px",
      "height": "90px",
    },
    "@media (max-width:420px)": {
      "width": "160px",
      "height": "45px",
      "borderBottomLeftRadius": "15px",
    },
  })

  let hpBar = css({
    "position": "absolute",
    "width": "93%",
    "height": "45px",
    "top": "10px",
    "right": "10px",
    "backgroundColor": "black",
    "@media (max-width:1024px)": {
      "width": "90%",
      "height": "40px",
    },
    "@media (max-width:420px)": {
      "top": "5px",
      "right": "5px",
      "height": "20px",
      "width": "90%",
    },
  })

  let hpText = css({
    "display": "inline-block",
    "marginTop": "4px",
    "paddingLeft": "5px",
    "color": "#ecd482",
    "fontSize": "40px",
    "fontWeight": "bold",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "@media (max-width:1024px)": {
      "marginTop": "3px",
      "fontSize": "2.5rem",
    },
    "@media (max-width:420px)": {
      "marginTop": "0",
      "fontSize": "1.4rem",
    },
  })

  let hpStick = css({
    "position": "absolute",
    "top": "0px",
    "right": "25px",
    "width": "400px",
    "height": "35px",
    "backgroundColor": "white",
    "@media (max-width:1024px)": {
      "width": "250px",
      "height": "30px",
      "right": "20px",
    },
    "@media (max-width:420px)": {
      "width": "100px",
      "height": "14px",
      "right": "5px",
    },
  })

  let hpStickBarFunc = (~hp: int) => {
    css({
      "marginTop": "10px",
      "width": string_of_int(hp) ++ "%",
      "height": "15px",
      "backgroundColor": BarColor.getBarColor(~percentage=hp),
      "@media (max-width:420px)": {
        "marginTop": "4px",
        "height": "7px",
      },
    })
  }
}
