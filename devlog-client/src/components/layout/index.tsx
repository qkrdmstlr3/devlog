// Dependencies
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import * as Style from './styled';

// Components
import LeftList from '@Components/LeftList';
import BottomList from '@Components/BottomList';
import AdminMenu from '@Components/AdminMenu';

// Contexts
import { AdminContext } from '@ContextAPI/admin';

const GITHUB_URL = 'https://github.com/qkrdmstlr3';

function Layout({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement {
  const [isInput, setIsInput] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const { adminKey, getAdmin } = useContext(AdminContext);
  const { pathname } = useRouter();
  const isPathMain = pathname === '/';

  const inputOpenHandler = () => {
    setIsInput(true);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getAdmin(inputValue);
    setIsInput(false);
  };

  const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Style.Container>
      <Style.Header isPathMain={isPathMain} />
      <Style.LeftList>
        <LeftList />
      </Style.LeftList>
      <Style.Main isPathMain={isPathMain}>{children}</Style.Main>
      <Style.Blue onClick={inputOpenHandler}>
        {isInput ? (
          <form onSubmit={submitHandler}>
            <input
              type="password"
              value={inputValue}
              onChange={inputValueHandler}
            />
          </form>
        ) : (
          <></>
        )}
      </Style.Blue>
      <Style.BottomList isPathMain={isPathMain}>
        <BottomList />
      </Style.BottomList>
      <Style.Introduce>
        <Style.IntroduceLink
          href={GITHUB_URL}
          target="_blank"
          isPathMain={isPathMain}
        >
          GitHub
        </Style.IntroduceLink>
      </Style.Introduce>
      <Style.Yellow>{adminKey ? <AdminMenu /> : <></>}</Style.Yellow>
    </Style.Container>
  );
}

export default Layout;
