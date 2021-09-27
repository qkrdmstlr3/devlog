open ListPageStyles
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

  Js.log(categoryList)
  /* JSX */
  let categoryContent = Js.Array.map((category: string) => {
    <li
      key={category}
      className={Styles.categoryItem}
      onClick={_ => changeSelectedCategory(category)}>
      {currentCategory === category
        ? <div className={Styles.select}> {"▶"->React.string} </div>
        : ""->React.string}
      {category->React.string}
    </li>
  }, categoryList)

  let content = Js.Array.map((post: Query.PostListQuery.Raw.t_allMarkdownRemark_edges) => {
    let frontmatter = post.node.frontmatter->getExn
    let isPageToShow = currentCategory === all || currentCategory === frontmatter.category->getExn

    isPageToShow
      ? <li key={frontmatter.title->getExn} className={Styles.postItem}>
          <div className={Styles.postCategory}>
            {("[" ++ frontmatter.category->getExn ++ "]")->React.string}
          </div>
          <h2 className={Styles.postTitle}> {frontmatter.title->getExn->React.string} </h2>
          <p className={Styles.postContent}> {post.node.excerpt->getExn->React.string} </p>
        </li>
      : <> </>
  }, posts)

  <div className={Styles.container}>
    <span className={Styles.backButton}> {"home"->React.string} </span>
    <ul className={Styles.categoryList}> {React.array(categoryContent)} </ul>
    <ul className={Styles.postList}> {React.array(content)} </ul>
  </div>
}

let default = make
