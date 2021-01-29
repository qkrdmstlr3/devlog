/** Dependencies */
import { CreatePagesArgs } from 'gatsby';
import { Query } from '../graphql-types';
import path from 'path';

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;

  const { data, errors } = await graphql<Query>(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  if (errors || !data) {
    throw errors;
  }

  data.allMarkdownRemark.edges.forEach(({ node }: any) => {
    createPage({
      path: String(node.frontmatter.title),
      context: {
        html: node.html,
        title: String(node.frontmatter.title),
      },
      component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
    });
  });
}
