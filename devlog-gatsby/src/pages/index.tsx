// Dependencies
import React from 'react';
import Layout from '../layout/index';
import { graphql } from 'gatsby';

const IndexPage = ({ data }): React.ReactElement => {
  console.log(data);

  return <Layout>폰트 테스트</Layout>;
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
