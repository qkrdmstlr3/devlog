// Dependencies
import React from 'react';
import GlobalStyle from '../../../styles/GlobalStyle';
import * as Style from './styled';

// Libs
import SEO from '../../../libs/SEO';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Style.Layout>
      <SEO />
      <GlobalStyle />
      {children}
      <Style.Footer>
        <Style.Copyright>Copyright © 2021 Shellboy</Style.Copyright>
        <Style.Information>
          <Style.Github href="https://github.com/qkrdmstlr3/devlog">Github</Style.Github>
        </Style.Information>
      </Style.Footer>
    </Style.Layout>
  );
}

export default Layout;