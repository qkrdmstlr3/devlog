open MonsterBallStyles

@react.component
let make = () => {
  let balls = Js.Array.map(number => {
    <div className={Styles.ball} key={string_of_int(number)}>
      <div className={Styles.redPart} />
      <div className={Styles.blackPart}> <div className={Styles.centerPart} /> </div>
    </div>
  }, [0, 1, 2, 3, 4, 5])

  <div className={Styles.container}>
    <div className={Styles.innerWrapper}> {balls->React.array} </div>
  </div>
}

let default = make
