// Dependencies
import React from 'react';
import { useRouter } from 'next/router';
import * as Style from './styled';

function Layout({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement {
  const { pathname } = useRouter();
  const isPathMain = pathname === '/';

  return (
    <Style.Container>
      <Style.Header isPathMain={isPathMain} />
      <Style.List />
      <Style.Main isPathMain={isPathMain}>{children}</Style.Main>
      <Style.Blue />
      <Style.BottomList />
      <Style.Introduce />
      <Style.Yellow />
    </Style.Container>
  );
}

export default Layout;
