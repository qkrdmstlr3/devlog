// Dependencies
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

// Contexts
import { AdminContext } from '@ContextAPI/admin';

interface UseLayoutType {
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
  const [isInput, setIsInput] = useState(false);
  const { adminKey } = useContext(AdminContext);
  const { pathname } = useRouter();
  const isPathMain = pathname === '/';

  const inputOpenHandler = () => {
    setIsInput(true);
  };

  return {
    isInput,
    adminKey,
    isPathMain,
    inputOpenHandler,
  };
}

export default useLayout;
