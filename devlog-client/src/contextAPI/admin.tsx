import React, { createContext, useState } from 'react';
import { SECRET_KEY } from '@env';

interface InitialStateType {
  adminKey: string;
  getAdmin: (password: string) => void;
}

interface AdminKeyProviderType {
  children: React.ReactNode;
}

const initialState = {
  adminKey: '',
  getAdmin: () => null,
};

const AdminContext = createContext<InitialStateType>(initialState);

const AdminProvider = ({ children }: AdminKeyProviderType): any => {
  const [adminKey, setAdminKey] = useState<string>('');

  const getAdmin = (password: string) => {
    if (SECRET_KEY === password) {
      setAdminKey(SECRET_KEY);
      return;
    }
    setAdminKey('');
  };

  const context = {
    adminKey,
    getAdmin,
  };

  return (
    <AdminContext.Provider value={context}>{children}</AdminContext.Provider>
  );
};

export { AdminProvider, AdminContext };
