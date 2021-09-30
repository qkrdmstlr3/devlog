type iconType = ReactIcon | GraphqlIcon | LeftChevronIcon

@react.component
let make = (~icon: iconType) => {
  switch icon {
  | ReactIcon => <ReactIcon />
  | GraphqlIcon => <GraphqlIcon />
  | LeftChevronIcon => <LeftChevronIcon />
  }
}

let default = make
