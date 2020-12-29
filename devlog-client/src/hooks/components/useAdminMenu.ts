// Dependencies
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';

// Contexts
import { AdminContext } from '@ContextAPI/admin';

interface UseAdminMenuType {
  /** listName을 만드는 이름 */
  inputValue: string;
  /** 라우팅에 사용할 게시글 번호 */
  post: string | string[] | undefined;
  /** listName값을 바꾸는 함수 */
  inputValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** listName 생성 함수 */
  createListNameHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  /** post삭제 함수 */
  deletePostHandler: () => void;
  /** admin권한 취소 함수 */
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
