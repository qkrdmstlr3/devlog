// Dependencies
import React from 'react';
import Link from 'next/link';
import * as Style from './styled';

// Hooks
import useAdminMenu from '@Hooks/components/useAdminMenu';

// RenderingData
import string from '@RenderingData/string';

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
        <Link href="/create">{string.CREATE}</Link>
      </Style.Button>
      <Style.Button>
        <Link href={`/update/${post}`}>{string.MODIFY}</Link>
      </Style.Button>
      <Style.Button onClick={deletePostHandler}>{string.DELETE}</Style.Button>
      <Style.Button onClick={removeAdmin}>{string.NO_AUTHORITY}</Style.Button>
      <Style.Form onSubmit={createListNameHandler}>
        <Style.Input onChange={inputValueHandler} value={inputValue} />
      </Style.Form>
    </>
  );
}

export default AdminMenu;
