@react.component
let make = (~title: string, ~description) => {
  <Helmet.reactHelmet title={title}>
    <meta name="description" content={description} />
    <meta name="author" content="author" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content="shellboylog.com" />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="ko_KR" />
  </Helmet.reactHelmet>
}

let default = make
