open IconStyles

type iconType = ReactIcon | GraphqlIcon | LeftChevronIcon

@react.component
let make = (~icon: iconType) => {
  let src = switch icon {
  | ReactIcon => "https://techstack-generator.vercel.app/react-icon.svg"
  | GraphqlIcon => "https://techstack-generator.vercel.app/graphql-icon.svg"
  | _ => ""
  }

  switch (src, icon) {
  | ("", LeftChevronIcon) => <LeftChevronIcon />
  | _ => <img className={Styles.iconImage} src={src} />
  }
}

let default = make
