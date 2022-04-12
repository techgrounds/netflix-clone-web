import { useState } from "react";
import { createContext } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");
  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
