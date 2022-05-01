// Dependencies
import React from 'react';
import { Link } from 'gatsby';
import Prism from 'prismjs';
import { Viewer } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { ITemplateProps } from '../../../interface';
import * as Style from './styled';

// Language Style
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-tsx.js';
import 'prismjs/components/prism-ocaml.js';
import 'prismjs/components/prism-rescript.js';
import 'prismjs/components/prism-typescript.js';

type IPostTemplateProps = ITemplateProps<{
  html: string;
  title: string;
  date: string;
  category: string;
  markdown: string;
}>;

function Post({
  pageResources: {
    json: { pageContext },
  },
}: IPostTemplateProps) {
  return (
    <Style.Wrapper>
      <Style.Header>
        <Style.Back>
          <Link to="/">◀뒤로가기</Link>
        </Style.Back>
        <Style.Category>
          {pageContext.category}
          <Style.Date>/ {pageContext.date}</Style.Date>
        </Style.Category>
      </Style.Header>
      <Style.Title>{pageContext.title}</Style.Title>
      <Style.WysiwygStyle>
        {typeof window !== `undefined` && (
          <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} initialValue={pageContext.markdown} />
        )}
      </Style.WysiwygStyle>
    </Style.Wrapper>
  );
}

export default Post;
