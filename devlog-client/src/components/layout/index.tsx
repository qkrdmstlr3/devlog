// Dependencies
import React from 'react';
import * as Style from './styled';

// Components
import LeftList from '@Components/LeftList';
import BottomList from '@Components/BottomList';
import AdminMenu from '@Components/AdminMenu';
import AdminInput from '@Components/AdminInput';

// Hooks
import useLayout from '@Hooks/components/useLayout';

// RenderingData
import string from '@RenderingData/string';

function Layout({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement {
  const { isInput, adminKey, isPathMain, inputOpenHandler } = useLayout();

  return (
    <Style.Container>
      <Style.Header isPathMain={isPathMain} />
      <Style.LeftList>
        <LeftList />
      </Style.LeftList>
      <Style.Main isPathMain={isPathMain}>{children}</Style.Main>
      <Style.Blue onDoubleClick={inputOpenHandler}>
        {isInput && <AdminInput />}
      </Style.Blue>
      <Style.BottomList isPathMain={isPathMain}>
        <BottomList />
      </Style.BottomList>
      <Style.Introduce>
        <Style.IntroduceLink
          href={string.GITHUB_URL}
          target="_blank"
          isPathMain={isPathMain}
        >
          {string.GITHUB}
        </Style.IntroduceLink>
      </Style.Introduce>
      <Style.Yellow>{adminKey ? <AdminMenu /> : <></>}</Style.Yellow>
    </Style.Container>
  );
}

export default Layout;
