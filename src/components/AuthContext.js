
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: '',
    isAuthenticated: false,
  });

  const login = () => {
    setAuthState({ user: 'rohan', isAuthenticated: true });
  };

  const signout = () => {
    setAuthState({ user: '', isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ authState, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
