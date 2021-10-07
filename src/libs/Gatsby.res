@module("gatsby") external navigate: string => 'a = "navigate"
@module("gatsby") external useStaticQuery: string => 'a = "useStaticQuery"
@module("gatsby") @react.component
external link: (
  ~children: React.element,
  ~_to: string,
  ~className: string=?,
  ~replace: bool=?,
  ~onClick: ReactEvent.Mouse.t => unit=?,
  ~state: Js.Json.t=?,
  ~activeClassName: string=?,
  ~partiallyActive: bool=?,
  ~rel: string=?,
) => React.element = "Link"
