// Dependencies
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';

// Contexts
import { AdminContext } from '@ContextAPI/admin';

interface UseAdminMenuType {
  inputValue: string;
  post: string | string[] | undefined;
  inputValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  createListNameHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  deletePostHandler: () => void;
  removeAdmin: () => void;
}

function useAdminMenu(): UseAdminMenuType {
  const {
    query: { post },
  } = useRouter();
  const { getAdmin } = useContext(AdminContext);
  const [inputValue, setInputValue] = useState<string>('');

  const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const createListNameHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const check = window.confirm('정말 생성하시겠습니까?');
    if (check) {
      // 생성하기
    }
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

  return {
    inputValue,
    post,
    inputValueHandler,
    createListNameHandler,
    deletePostHandler,
    removeAdmin,
  };
}

export default useAdminMenu;
