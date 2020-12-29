// Dependencies
import React from 'react';
import Link from 'next/link';
import * as Style from './styled';

// Hooks
import useAdminMenu from '@Hooks/components/useAdminMenu';

function AdminMenu(): React.ReactElement {
  const {
    inputValue,
    post,
    inputValueHandler,
    deletePostHandler,
    removeAdmin,
    createListNameHandler,
  } = useAdminMenu();

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
