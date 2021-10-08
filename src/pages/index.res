%graphql(`
  query PostListQuery {
    allMarkdownRemark(sort: {order: [DESC], fields: [frontmatter___date]}) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD HH:m:ss")
            category
          }
        }
      }
    }
  }
`)

@react.component
let make = () => {
  let data: Query.PostListQuery.Raw.t = PostListQuery.query->Gatsby.useStaticQuery
  let posts = data.allMarkdownRemark.edges

  <Layout> <IndexPage posts /> </Layout>
}

let default = make
