let getBarColor = (~percentage: int): string => {
  let color = if percentage > 66 {
    "#2fe408"
  } else if percentage > 33 {
    "orange"
  } else {
    "red"
  }
  color
}
