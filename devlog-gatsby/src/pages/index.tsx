// Dependencies
import React from 'react';
import Layout from '../components/Layout/index';
import { graphql } from 'gatsby';

const IndexPage = ({ data }): React.ReactElement => {
  console.log(data);

  return <Layout>hello world</Layout>;
};

export const query = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD HH:mm:ss")
          }
          id
        }
      }
    }
  }
`;

export default IndexPage;
