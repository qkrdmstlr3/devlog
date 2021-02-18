// Dependencies
import React from 'react';
import GlobalStyle from '../common/style/GlobalStyle';
import * as Style from './styled';
import { RecoilRoot } from 'recoil';

// Utils
import SEO from '../utils/Seo';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Style.Layout>
      <SEO />
      <GlobalStyle />
      <RecoilRoot>{children}</RecoilRoot>
      <Style.Footer>
        <Style.Copyright>Copyright © 2021 Shellboy</Style.Copyright>
        <Style.Information>
          <Style.Github href="https://github.com/qkrdmstlr3/devlog">
            Github
          </Style.Github>
        </Style.Information>
      </Style.Footer>
    </Style.Layout>
  );
}

export default Layout;
