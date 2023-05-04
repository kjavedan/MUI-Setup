import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./theme";
import router from "./routes";
import { ThemeModeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeModeProvider>
        <LanguageProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </LanguageProvider>
      </ThemeModeProvider>
    </HelmetProvider>
  );
};

export default App;
