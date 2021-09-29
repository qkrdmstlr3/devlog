open BorderBoxStyles

@react.component
let make = (~width: string, ~height: string, ~children: React.element, ~onClick) => {
  <div className={Styles.outContainerFunc(~width, ~height)}>
    <div className={Styles.innerContainer} onClick> children </div>
  </div>
}

let default = make
