import React, {createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
    
  const [status, setStatus] =  useState(false);
  const toggleLogin = () => setStatus(!status)
    
  const value = {
    status: status,
    toggleLogin: toggleLogin
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
};

// Step 3 - Export the Context & Provider
export { AuthContext, AuthProvider };
