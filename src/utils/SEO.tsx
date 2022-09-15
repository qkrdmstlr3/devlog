import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';

interface SEOProps {
  title?: string;
  description?: string;
  author?: string;
}

function SEO({ title = '', description = '', author = 'shellboy' }: SEOProps) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query);
  const { pathname } = useLocation();

  const { defaultTitle, defaultDescription, siteUrl, defaultAuthor } = siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: 'ko' }}>
      {/* <!--  Essential META Tags --> */}
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.author && <meta property="og:author" content={seo.author} />}
      <meta property="og:image" content="/images/banner.png" />
      <meta name="twitter:card" content="/images/banner.png" />

      {/* <!--  Non-Essential, But Recommended --> */}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.title && <meta property="og:site_name" content={seo.title} />}

      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.title && <meta name="twitter:site" content={`${seo.title}-${author}`} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.author && <meta name="twitter:author" content={seo.author} />}
      {/* search google */}
      <meta name="google-site-verification" content="P9fscnwppzi43ookrjSqasBN4tSZ29V0C8g-oreh0Ao" />
      <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        defaultAuthor: author
      }
    }
  }
`;

export default SEO;
