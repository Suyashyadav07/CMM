import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null; 
  });

  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user)); 
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser'); 
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
