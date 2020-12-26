// Dependencies
import app from 'next/app';
import React from 'react';

// Styles
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../common/style/GlobalStyle';
import { theme } from '../common/style/styled';

export default class MyApp extends app {
  public render(): React.ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
