open IndexPageStyles
open Nullable

module StringCmp = Belt.Id.MakeComparable({
  type t = string
  let cmp = Pervasives.compare
})

@react.component
let make = (~posts: array<Query.PostListQuery.Raw.t_allMarkdownRemark_edges>) => {
  let all = "all"
  let (currentCategory, setCurrentCategory) = React.useState(_ => all)
  let (categoryList, setCategoryList) = React.useState(_ => [])

  let changeSelectedCategory = (category: string) => {
    setCurrentCategory(_prev => category)
  }

  React.useEffect1(() => {
    let categoryList = Js.Array.map(
      (post: Query.PostListQuery.Raw.t_allMarkdownRemark_edges) =>
        (post.node.frontmatter->getExn).category->getExn,
      posts,
    )
    let categorySet = Belt.Set.fromArray(
      Js.Array.concat([all], categoryList),
      ~id=module(StringCmp),
    )

    setCategoryList(_ => categorySet->Belt.Set.toArray)
    None
  }, posts)

  /* JSX */
  let categoryContent = Js.Array.map((category: string) => {
    <li
      key={category}
      className={Styles.categoryItem}
      onClick={_ => changeSelectedCategory(category)}>
      {currentCategory === category
        ? <div className={Styles.select}> {`▶`->React.string} </div>
        : ""->React.string}
      {category->React.string}
    </li>
  }, categoryList)

  let content = Js.Array.map((post: Query.PostListQuery.Raw.t_allMarkdownRemark_edges) => {
    let frontmatter = post.node.frontmatter->getExn
    let category = frontmatter.category->getExn
    let title = frontmatter.title->getExn
    let summarizedContent = post.node.excerpt->getExn

    let isPageToShow = currentCategory === all || currentCategory === category
    switch isPageToShow {
    | true =>
      <li key={title} className={Styles.postItem}>
        <Gatsby.link _to={"/" ++ category ++ "/" ++ title}>
          <div className={Styles.postCategory}> {("[" ++ category ++ "]")->React.string} </div>
          <h2 className={Styles.postTitle}> {title->React.string} </h2>
          <p className={Styles.postContent}> {summarizedContent->React.string} </p>
        </Gatsby.link>
      </li>
    | false => <> </>
    }
  }, posts)

  <div className={Styles.container}>
    <span className={Styles.backButton}>
      <Gatsby.link _to="/game"> {`게임으로`->React.string} </Gatsby.link>
    </span>
    <ul className={Styles.categoryList}> {React.array(categoryContent)} </ul>
    <ul className={Styles.postList}> {React.array(content)} </ul>
  </div>
}

let default = make
