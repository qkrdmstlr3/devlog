import { graphql } from 'gatsby';
import { BlogContainer, PostMetaDataType } from '../containers/v3/Blog';
import { flatObj } from '../utils/module';

interface BlogProps {
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

function Blog({
  data: {
    allMarkdownRemark: { edges },
  },
}: BlogProps) {
  const metaData = edges.map((edge) => flatObj<PostMetaDataType>(edge.node));

  return <BlogContainer postMetaData={metaData} />;
}

export const query = graphql`
  query BlogMetaData {
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

export default Blog;
