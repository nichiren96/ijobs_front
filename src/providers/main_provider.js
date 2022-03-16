import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <MainContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </MainContext.Provider>
  );
};
