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
            rawMarkdownBody
            frontmatter {
              title
              date
              category
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
      path: `${String(node.frontmatter.category)}/${String(
        node.frontmatter.title
      )}`,
      context: {
        markdown: node.rawMarkdownBody,
        title: String(node.frontmatter.title),
        date: String(node.frontmatter.date),
        category: String(node.frontmatter.category),
      },
      component: path.resolve(__dirname, '../templates/PostTemplate/index.tsx'),
    });
  });
}
