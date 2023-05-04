import { createContext, useState } from "react";
const ThemeContext = createContext();

const ContextProvider = (props) => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleThemeMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleThemeMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ContextProvider as ThemeModeProvider };
