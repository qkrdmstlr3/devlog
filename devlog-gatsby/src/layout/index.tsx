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
    </Style.Layout>
  );
}

export default Layout;
