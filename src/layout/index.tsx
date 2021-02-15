import React from 'react';
import GlobalStyle from '../common/style/GlobalStyle';
import * as Style from './styled';
import { Helmet } from 'react-helmet';
import { RecoilRoot } from 'recoil';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Style.Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>조개소년 개발블로그</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="조개소년 개발블로그" />
        <meta
          name="keyword"
          content="shellboylog, 조개소년 개발블로그, shellboy"
        />
        <meta name="author" content="shellboy" />
        <meta
          name="description"
          content="개발자 조개소년의 개발 블로그입니다"
        />
        <meta property="og:title" content="조개소년 개발블로그" />
        <meta property="og:author" content="shellboy" />
        <meta
          property="og:description"
          content="개발자 조개소년의 개발 블로그입니다"
        />
      </Helmet>
      <GlobalStyle />
      <RecoilRoot>{children}</RecoilRoot>
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
