import React from 'react';
import GlobalStyle from '../../common/style/GlobalStyle';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  );
}

export default Layout;
