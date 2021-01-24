// Dependencies
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Contexts
import { AdminContext } from '@ContextAPI/admin';

interface UseLayoutType {
  /** 현재 페이지가 포스트 페이지인지 확인 */
  isPostPage: boolean;
  /** 경로가 메인인지 확인 */
  isPathMain: boolean;
  /** 권한을 얻기위한 input창이 열려있는지 확인 */
  isInput: boolean;
  /** 권한이 있는지 확인(값이 있으면 권한을 얻은 것) */
  adminKey: string;
  /** 권한 입력 창을여는 함수 */
  inputOpenHandler: () => void;
}

function useLayout(): UseLayoutType {
  const [isInput, setIsInput] = useState<boolean>(false);
  const [isPostPage, setIsPostPage] = useState<boolean>(false);
  const { adminKey } = useContext(AdminContext);
  const {
    pathname,
    query: { post },
  } = useRouter();
  const isPathMain = pathname === '/';

  const inputOpenHandler = () => {
    setIsInput(true);
  };

  useEffect(() => {
    if (post) {
      setIsPostPage(true);
    } else {
      setIsPostPage(false);
    }
  }, [post]);

  return {
    isPostPage,
    isInput,
    adminKey,
    isPathMain,
    inputOpenHandler,
  };
}

export default useLayout;
