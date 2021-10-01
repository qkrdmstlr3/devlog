module Styles = {
  open Emotion

  // span
  let name = css({
    "display": "inline-block",
    "marginLeft": "160px",
    "fontSize": "50px",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "fontWeight": "bold",
    "@media (max-width:1024px)": {
      "marginLeft": "130px",
      "fontSize": "2.5rem",
    },
    "@media (max-width:420px)": {
      "marginLeft": "50px",
      "fontSize": "1.2rem",
    },
  })

  // div
  let hpWrapper = css({
    "position": "relative",
    "width": "600px",
    "height": "160px",
    "backgroundColor": "black",
    "borderBottomRightRadius": "30px",
    "borderTopRightRadius": "30px",
    "@media (max-width:1024px)": {
      "width": "400px",
      "height": "120px",
    },
    "@media (max-width:420px)": {
      "width": "180px",
      "height": "60px",
      "borderBottomRightRadius": "15px",
      "borderTopRightRadius": "15px",
    },
  })

  // div
  let hpCenter = css({
    "position": "absolute",
    "top": "45px",
    "width": "570px",
    "height": "105px",
    "display": "flex",
    "justifyContent": "flex-end",
    "padding": "15px 30px 0 0",
    "backgroundColor": "white",
    "borderBottomRightRadius": "30px",
    "borderTopRightRadius": "30px",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "fontSize": "50px",
    "fontWeight": "bold",
    "letterSpacing": "12px",
    "wordSpacing": "20px",
    "@media (max-width:1024px)": {
      "top": "40px",
      "width": "370px",
      "height": "70px",
      "fontSize": "2.5rem",
    },
    "@media (max-width:420px)": {
      "top": "20px",
      "height": "35px",
      "width": "160px",
      "padding": "5px 10px 0 0",
      "borderBottomRightRadius": "15px",
      "borderTopRightRadius": "15px",
      "fontSize": "1.2rem",
      "letterSpacing": "5px",
      "wordSpacing": "5px",
    },
  })

  // span
  let hpText = css({
    "position": "relative",
    "display": "inline-block",
    "padding": "4px 0 0 45px",
    "color": "#ecd482",
    "fontSize": "40px",
    "fontWeight": "bold",
    "fontFamily": "'NeoDunggeunmo', sans-serif",
    "@media (max-width:1024px)": {
      "fontSize": "2.5rem",
      "padding": "0 0 0 40px",
    },
    "@media (max-width:420px)": {
      "fontSize": "1.4rem",
      "padding": "0 0 0 25px",
    },
    "::before": {
      "content": "''",
      "height": "45px",
      "width": "40px",
      "position": "absolute",
      "left": "0px",
      "top": "0px",
      "backgroundColor": "white",
      "@media (max-width:1024px)": {
        "width": "32px",
      },
      "@media (max-width:420px)": {
        "width": "20px",
      },
    },
  })

  // div
  let hpStick = css({
    "position": "absolute",
    "top": "0px",
    "right": "50px",
    "width": "400px",
    "height": "35px",
    "backgroundColor": "white",
    "@media (max-width:1024px)": {
      "width": "250px",
      "height": "30px",
      "right": "40px",
    },
    "@media (max-width:420px)": {
      "width": "100px",
      "height": "14px",
      "right": "20px",
    },
  })

  let hpStickBarFunc = (~hp: int) => {
    css({
      "marginTop": "10px",
      "width": string_of_int(hp) ++ "%",
      "height": "15px",
      "backgroundColor": BarColor.getBarColor(~percentage=hp),
      "@media (max-width:420px)": {
        "marginTop": " 4px",
        "height": " 7px",
      },
    })
  }
}
