// Dependencies
import React, { useState, useEffect } from 'react';
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
  pageResources,
}: IPostTemplateProps): React.ReactElement => {
  const [info, setInfo] = useState({
    html: '',
    title: '',
    date: '',
    category: '',
  });

  useEffect(() => {
    if (pageResources) {
      const {
        json: {
          pageContext: { html, title, date, category },
        },
      } = pageResources;

      setInfo({
        html,
        title,
        date,
        category,
      });
    }
  }, []);

  return (
    <Layout>
      <Style.Wrapper>
        <Style.Header>
          <Style.Back>
            <Link to="/list">◀뒤로가기</Link>
          </Style.Back>
          <Style.Category>
            {info.category}
            <Style.Date>/ {info.date}</Style.Date>
          </Style.Category>
        </Style.Header>
        <Style.Title>{info.title}</Style.Title>
        <Style.WysiwygStyle>
          <div dangerouslySetInnerHTML={{ __html: info.html }} />
        </Style.WysiwygStyle>
      </Style.Wrapper>
    </Layout>
  );
};

export default PostTemplate;
