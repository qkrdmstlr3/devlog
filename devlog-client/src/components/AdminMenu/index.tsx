// Dependencies
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Style from './styled';

// Contexts
import { AdminContext } from '@ContextAPI/admin';

function AdminMenu(): React.ReactElement {
  const {
    query: { post },
  } = useRouter();
  const { getAdmin } = useContext(AdminContext);
  const [inputValue, setInputValue] = useState('');

  const createListNameHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const check = window.confirm('정말 삭제하시겠습니까?');
    if (check) {
      // 생성하기
    }
  };

  const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const deletePostHandler = () => {
    const check = window.confirm('정말 삭제하시겠습니까?');
    if (check) {
      // 삭제하기
    }
  };

  const removeAdmin = () => {
    getAdmin('');
  };

  return (
    <>
      <Style.Button>
        <Link href="/create">생성하기</Link>
      </Style.Button>
      <Style.Button>
        <Link href={`/update/${post}`}>수정하기</Link>
      </Style.Button>
      <Style.Button onClick={deletePostHandler}>삭제하기</Style.Button>
      <Style.Button onClick={removeAdmin}>권한 해제</Style.Button>
      <Style.Form onSubmit={createListNameHandler}>
        <Style.Input onChange={inputValueHandler} value={inputValue} />
      </Style.Form>
    </>
  );
}

export default AdminMenu;
