const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@toast-ui\/react-editor/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === 'MarkdownRemark') {
//     const fileNode = getNode(node.parent);
//     const parsedFilePath = path.parse(fileNode.relativePath);

//     createNodeField({
//       node,
//       name: 'slug',
//       value: parsedFilePath.name,
//     });
//   }
// };

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            rawMarkdownBody
            frontmatter {
              id
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

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${String(node.frontmatter.category)}/${String(node.frontmatter.id)}`,
      context: {
        markdown: node.rawMarkdownBody,
        html: node.html,
        title: String(node.frontmatter.title),
        date: String(node.frontmatter.date),
        category: String(node.frontmatter.category),
      },
      component: path.resolve(__dirname, './src/components/pages/Post/index.tsx'),
    });
  });
};
