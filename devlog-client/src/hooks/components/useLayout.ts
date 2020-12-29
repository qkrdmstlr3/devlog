// Dependencies
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

// Contexts
import { AdminContext } from '@ContextAPI/admin';

interface UseLayoutType {
  isPathMain: boolean;
  isInput: boolean;
  inputValue: string;
  adminKey: string;
  inputOpenHandler: () => void;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
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
