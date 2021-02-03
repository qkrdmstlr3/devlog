// Dependencies
import React from 'react';
import Layout from '../layout/index';
import { graphql } from 'gatsby';

// Components
import IndexPage from '../components/pages/indexPage';

const Index = (): React.ReactElement => {
  return (
    <Layout>
      <IndexPage />
    </Layout>
  );
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

export default Index;
