// Dependencies
import app from 'next/app';
import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@Style/GlobalStyle';
import { theme } from '@Style/styled';

// Components
import Layout from '@Components/layout';

export default class MyApp extends app {
  public render(): React.ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Shellboy DevLog</title>
          <meta charSet="utf-8" />
          <meta name="description" content="조개소년 개발 블로그" />
          <meta
            name="Keywords"
            content="조개소년, shellboy, devlog, 개발 블로그"
          />
        </Helmet>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
