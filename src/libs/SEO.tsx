import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';

interface SeoProps {
  title?: string;
  description?: string;
  author?: string;
}

function Seo({ title, description, author }: SeoProps) {
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
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.author && <meta property="og:author" content={seo.author} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.author && <meta name="twitter:author" content={seo.author} />}
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

export default Seo;
