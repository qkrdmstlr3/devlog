// Dependencies
import React from 'react';
import Layout from '../../../layout';
import { ITemplateProps } from '../../../interface';
import * as Style from './styled';
import { Link } from 'gatsby';

type IPostTemplateProps = ITemplateProps<{
  html: string;
  title: string;
  date: string;
  category: string;
}>;

const PostTemplate = ({
  pageResources: {
    json: {
      pageContext: { html, title, date, category },
    },
  },
}: IPostTemplateProps): React.ReactElement => {
  return (
    <Layout>
      <Style.Wrapper>
        <Style.Header>
          <Style.Back>
            <Link to="/list">◀뒤로가기</Link>
          </Style.Back>
          <Style.Category>
            {category}
            <Style.Date>/ {date}</Style.Date>
          </Style.Category>
        </Style.Header>
        <Style.Title>{title}</Style.Title>
        <Style.WysiwygStyle>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Style.WysiwygStyle>
      </Style.Wrapper>
    </Layout>
  );
};

export default PostTemplate;
