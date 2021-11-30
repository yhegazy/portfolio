// Step 1 - Create Context
import React, {createContext, useState } from "react";

const ProfileContext = createContext();

// Step 2 - Create Provider
function ProfileProvider(props) {
  const [theme, setTheme] =  useState("dark");
  const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark') 
  

  const [language, setLanguage] = useState("en") //sp & fr 

  const [unitOfMeasurement, setUnitOfMeasurement] = useState(["in", "ft", "yd", "mi"])
  const [temperatureUnit, setTemperatureUnit] = useState("&#176 F")
  
  
  const [masterData, setMasterData] = useState(() => JSON.parse(sessionStorage.getItem('master')))

  
  const value = {
    theme: theme,
    toggleTheme: toggleTheme
  }

  return (
    <ProfileContext.Provider value={value}>
      {props.children}
    </ProfileContext.Provider>
  );
};

// Step 3 - Export the Context & Provider
export { ProfileContext, ProfileProvider };
