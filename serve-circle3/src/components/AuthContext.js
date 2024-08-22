import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [auth, setAuth] = useState(false);

  const storeTokenInLs = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const handleLogin = () => {
    setAuth(true);
  };

  const handleLogout = () => {
    setAuth(false);
    localStorage.removeItem('token');
  };

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ storeTokenInLs, auth, handleLogin, handleLogout, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
