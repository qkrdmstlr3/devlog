open BorderBoxStyles

@react.component
let make = (
  ~width: string,
  ~height: string,
  ~children: option<React.element>=?,
  ~onClick: option<ReactEvent.Mouse.t => unit>=?,
) => {
  let childrenComponent = switch children {
  | Some(children) => children
  | None => <> </>
  }
  <div className={Styles.outContainerFunc(~width, ~height)}>
    {switch onClick {
    | Some(onClick) => <div className={Styles.innerContainer} onClick> childrenComponent </div>
    | None => <div className={Styles.innerContainer}> childrenComponent </div>
    }}
  </div>
}

let default = make
