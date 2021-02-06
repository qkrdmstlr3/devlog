// Dependencies
import React, { useEffect } from 'react';
import Layout from '../../layout';
import { ITemplateProps } from '../../interface';
import * as Style from './styled';

// Wysiwyg
// import 'codemirror/lib/codemirror.css';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Viewer } from '@toast-ui/react-editor';

type IPostTemplateProps = ITemplateProps<{
  title: string;
  markdown: string;
  date: string;
  category: string;
}>;

const PostTemplate = ({
  pageResources: {
    json: {
      pageContext: { title, markdown, date, category },
    },
  },
}: IPostTemplateProps): React.ReactElement => {
  return (
    <Layout>
      <Style.Wrapper>
        <Style.Title>{title}</Style.Title>
        {/* <Viewer initialValue={markdown} /> */}
      </Style.Wrapper>
    </Layout>
  );
};

export default PostTemplate;
