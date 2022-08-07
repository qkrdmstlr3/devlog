// Dependencies
import React from 'react';
import { graphql } from 'gatsby';

// Components
import MainPage, { PostMetaDataType } from '../components/pages/Main';

// Utils
import { flatObj } from '../utils/module';

interface MainProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          excerpt: string;
          frontmatter: {
            id: string;
            category: string;
            date: string;
            title: string;
            summary: string;
          };
        };
      }[];
    };
  };
}

function Main({
  data: {
    allMarkdownRemark: { edges },
  },
}: MainProps): React.ReactElement {
  const metaData = edges.map((edge) => flatObj<PostMetaDataType>(edge.node));

  return <MainPage postMetaData={metaData} />;
}

export const query = graphql`
  query PostMetaData {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            id
            title
            date(formatString: "YYYY-MM-DD")
            category
            summary
          }
        }
      }
    }
  }
`;

export default Main;
