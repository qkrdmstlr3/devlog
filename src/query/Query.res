let summarizedPostsQuery = %graphql(`
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
