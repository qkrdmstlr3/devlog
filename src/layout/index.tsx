import React from 'react';
import GlobalStyle from '../common/style/GlobalStyle';
import * as Style from './styled';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Style.Layout>
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
