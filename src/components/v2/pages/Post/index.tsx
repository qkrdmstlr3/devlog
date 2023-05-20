// Dependencies
import React from 'react';
import { graphql, Link } from 'gatsby';
import Prism from 'prismjs';
import { Viewer } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import SEO from '../../../../utils/SEO';
import * as Style from './styled';

// Language Style
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-tsx.js';
import 'prismjs/components/prism-ocaml.js';
import 'prismjs/components/prism-rescript.js';
import 'prismjs/components/prism-typescript.js';
import { blogPageRoute } from '../../../../route';
import Layout from '../../layout';
import { Spacing } from '../../../v3/Spacing';

function Post({ data: { markdownRemark: post } }: any) {
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.summary} />
      {post && (
        <>
          <Style.Wrapper>
            <Style.Back>
              <Link to={blogPageRoute}>◀ back</Link>
            </Style.Back>
            <Style.Header>
              <Style.Title>{post.frontmatter.title}</Style.Title>
              <Style.Category>
                <Style.Date>/ {post.frontmatter.date}</Style.Date>
              </Style.Category>
            </Style.Header>
            <Spacing size={50} />
            <Style.WysiwygStyle>
              {typeof window !== `undefined` && (
                <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} initialValue={post.rawMarkdownBody} />
              )}
            </Style.WysiwygStyle>
          </Style.Wrapper>
        </>
      )}
    </Layout>
  );
}

export default Post;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      rawMarkdownBody
      frontmatter {
        id
        title
        date
        category
        summary
      }
    }
  }
`;
