const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    createNodeField({
      node,
      name: "slug",
      value: parsedFilePath.name,
    });
  }
};

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
      path: `${String(node.frontmatter.category)}/${String(
        node.frontmatter.title
      )}`,
      context: {
        markdown: node.rawMarkdownBody,
        html: node.html,
        title: String(node.frontmatter.title),
        date: String(node.frontmatter.date),
        category: String(node.frontmatter.category),
      },
      component: path.resolve(
        __dirname,
        "./src/components/templates/post-page/PostPage.js"
      ),
    });
  });
};
