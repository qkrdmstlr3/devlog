// Dependencies
import { useState, useContext } from 'react';

// Contexts
import { AdminContext } from '@ContextAPI/admin';

interface UseAdminInputType {
  /** 권한을 얻기위한 비밀번호 */
  inputValue: string;
  /** 권한 입력 제출 함수 */
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  /** 권한을 얻기위한 password값을 바꾸는 함수 */
  inputValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function useAdminInput(): UseAdminInputType {
  const [inputValue, setInputValue] = useState<string>('');
  const { getAdmin } = useContext(AdminContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getAdmin(inputValue);
  };

  const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return {
    inputValue,
    submitHandler,
    inputValueHandler,
  };
}

export default useAdminInput;
