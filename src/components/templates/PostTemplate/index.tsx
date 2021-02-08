// Dependencies
import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../../layout';
import { ITemplateProps } from '../../../interface';
import * as Style from './styled';
import { Link } from 'gatsby';
import ReactShadowDom from '../../../utils/ReactShadowDOM';
import ReactMarkdown from 'react-markdown';

// Components
import CodeBlock from './CodeBlock';

type IPostTemplateProps = ITemplateProps<{
  html: string;
  title: string;
  date: string;
  category: string;
  markdown: string;
}>;

const renderers = {
  image: ({
    alt,
    src,
    title,
  }: {
    alt?: string;
    src?: string;
    title?: string;
  }) => (
    <img
      alt={alt}
      src={src}
      title={title}
      style={{
        display: 'block',
        maxWidth: 475,
        margin: '0 auto',
      }}
    />
  ),
  code: CodeBlock,
};

const PostTemplate = ({
  pageResources,
}: IPostTemplateProps): React.ReactElement => {
  const postRef = useRef<any>();
  const [info, setInfo] = useState({
    markdown: '',
    html: '',
    title: '',
    date: '',
    category: '',
  });

  useEffect(() => {
    if (pageResources) {
      const {
        json: {
          pageContext: { html, title, date, category, markdown },
        },
      } = pageResources;

      setInfo({
        html,
        title,
        date,
        category,
        markdown,
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
        <Style.WysiwygStyle ref={postRef}>
          <ReactShadowDom parentDom={postRef}>
            <ReactMarkdown source={info.markdown} renderers={renderers} />
            {/* <div dangerouslySetInnerHTML={{ __html: info.html }} /> */}
          </ReactShadowDom>
        </Style.WysiwygStyle>
      </Style.Wrapper>
    </Layout>
  );
};

export default PostTemplate;
