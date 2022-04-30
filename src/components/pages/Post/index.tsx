import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import { ITemplateProps } from '../../../interface';

type IPostTemplateProps = ITemplateProps<{
  html: string;
  title: string;
  date: string;
  category: string;
  markdown: string;
}>;

function Post({ pageResources }: IPostTemplateProps) {
  if (typeof window !== `undefined`) return <Viewer initialValue={pageResources.json.pageContext.markdown} />;
  return <></>;
}

export default Post;
