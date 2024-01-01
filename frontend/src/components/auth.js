// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(() => {
  
    return localStorage.getItem('authenticated') === 'true';
  });
  const [userdetails,setUserDetails] =useState({
    
    "username":"",
    "email":""
  })

  const login_user = () => {
    setAuthenticated(true);
  };

  const logout_user = () => {
    localStorage.removeItem('userId');
    setAuthenticated(false);
  };

  useEffect(() => {
    // Save the authentication state to localStorage
    localStorage.setItem('authenticated', authenticated);
    
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ authenticated, login_user, logout_user,userdetails,setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
