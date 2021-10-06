let getBarColor = (~percentage: float): string => {
  let color = if percentage > 66.0 {
    "#2fe408"
  } else if percentage > 33.0 {
    "orange"
  } else {
    "red"
  }
  color
}
