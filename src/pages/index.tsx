// Dependencies
import { graphql } from 'gatsby';
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
}: MainProps) {
  const metaData = edges.map((edge) => flatObj(edge.node));
  console.log(metaData);

  return <span>v3</span>;
}

export const query = graphql`
  query PostMetaDataV2 {
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
