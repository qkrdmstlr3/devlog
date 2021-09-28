open PostPageStyles

type pageContextType = {
  category: string,
  date: string,
  html: string,
  markdown: string,
  title: string,
}

@react.component
let make = (~pageContext: pageContextType) => {
  let {category, date, title, html} = pageContext

  <Layout>
    <Seo title={title} description="" />
    <article className={Styles.container}>
      <header className={Styles.header}>
        <button className={Styles.backButton}>
          <Gatsby.link _to="/list"> {`◀뒤로가기`->React.string} </Gatsby.link>
        </button>
        <span className={Styles.category}>
          {category->React.string}
          <span className={Styles.date}> {("/ " ++ date)->React.string} </span>
        </span>
      </header>
      <h1 className={Styles.title}> {title->React.string} </h1>
      <div className={Styles.postContent} dangerouslySetInnerHTML={"__html": html} />
    </article>
  </Layout>
}

let default = make
