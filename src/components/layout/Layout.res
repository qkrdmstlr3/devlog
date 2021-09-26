open LayoutStyles

@react.component
let make = (~children: React.element) => {
  <main className={Styles.layout}>
    children
    <footer className={Styles.footer}>
      <span> {"Copyright 2021 Shellboy"->React.string} </span>
      <div>
        <a href="https://github.com/qkrdmstlr3/devlog" className={Styles.github}>
          {"Github"->React.string}
        </a>
      </div>
    </footer>
  </main>
}

let default = make
