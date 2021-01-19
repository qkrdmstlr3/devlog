// Dependencies
import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@Style/GlobalStyle';
import { theme } from '@Style/styled';

// Components
import Layout from '@Components/Layout';

// Contexts
import { AdminProvider } from '@ContextAPI/admin';

// Apollo
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@Libs/apolloClient';

interface AppProps {
  Component: any;
  pageProps: any;
}

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const apolloClient = useApollo(pageProps);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Helmet>
          <title>Shellboy DevLog</title>
          <meta charSet="utf-8" />
          <meta name="description" content="조개소년 개발 블로그" />
          <meta
            name="Keywords"
            content="조개소년, shellboy, devlog, 개발 블로그"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Helmet>
        <AdminProvider>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AdminProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}
