import { createContext, useState } from "react";

const LanguageContext = createContext();

const ContextProvider = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageToggle = () => {
    if (currentLanguage === "en") {
      setCurrentLanguage("ch");
    } else {
      setCurrentLanguage("en");
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, handleLanguageToggle }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, ContextProvider as LanguageProvider };
