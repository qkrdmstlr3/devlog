// Dependencies
import React from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';

// Components
import ListPage from '../components/pages/listPage';

function List({ data }): React.ReactElement {
  return (
    <Layout>
      <ListPage data={data} />
    </Layout>
  );
}

export const query = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD HH:mm:ss")
            category
          }
        }
      }
    }
  }
`;

export default List;
