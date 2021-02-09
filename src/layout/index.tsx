import React from 'react';
import GlobalStyle from '../common/style/GlobalStyle';
import * as Style from './styled';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Style.Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ShellboyLog</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {children}
      <Style.Footer>
        <Style.Copyright>Copyright © 2021 Shellboy</Style.Copyright>
        <Style.Information>
          <Style.Github href="https://github.com/qkrdmstlr3">
            Github
          </Style.Github>
        </Style.Information>
      </Style.Footer>
    </Style.Layout>
  );
}

export default Layout;
