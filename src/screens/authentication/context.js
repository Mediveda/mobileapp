// AuthContext.js

// Import necessary dependencies
import React, { createContext, useState, useContext } from 'react';

// Create authentication context
const AuthContext = createContext();

// Define AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Implement your authentication logic here
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement your logout logic here
    setIsAuthenticated(false);
  };
   
  // Provide authentication context to children
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
    
  );
};

// Define useAuth hook to consume authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
