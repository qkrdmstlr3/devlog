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
  /** 권한을 얻기위한 비밀번호 */
  inputValue: string;
  /** 권한이 있는지 확인(값이 있으면 권한을 얻은 것) */
  adminKey: string;
  /** 권한 입력 창을여는 함수 */
  inputOpenHandler: () => void;
  /** 권한 입력 제출 함수 */
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  /** 권한을 얻기위한 password값을 바꾸는 함수 */
  inputValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function useLayout(): UseLayoutType {
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

  return {
    isInput,
    inputValue,
    adminKey,
    isPathMain,
    inputOpenHandler,
    submitHandler,
    inputValueHandler,
  };
}

export default useLayout;
