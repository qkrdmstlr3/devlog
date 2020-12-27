// Dependencies
import React from 'react';
import * as Style from './styled';

function Layout({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement {
  return (
    <Style.Container>
      <Style.Header />
      <Style.List />
      <Style.Main />
      <Style.Blue />
      <Style.BottomList />
      <Style.Introduce />
      <Style.Yellow />
    </Style.Container>
  );
}

export default Layout;
