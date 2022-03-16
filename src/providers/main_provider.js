import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobsRight, setJobsRight] = useState([]);

  return (
    <MainContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        jobs,
        setJobs,
        jobsRight,
        setJobsRight,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
