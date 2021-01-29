import React from 'react';
import Layout from '../layout';
import { ITemplateProps } from '../interface';

type IPostTemplateProps = ITemplateProps<{
  html: string;
  title: string;
}>;

const PostTemplate = (props: IPostTemplateProps): React.ReactElement => {
  return (
    <Layout>
      <code>
        <pre>{JSON.stringify(props, null, 4)}</pre>
      </code>
    </Layout>
  );
};

export default PostTemplate;
