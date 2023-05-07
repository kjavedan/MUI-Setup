//REACT
import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";

//MUI
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material";

//CUSTOMS
import GlobalStyles from "./custom/globalStyles";
import { lightPalette, darkPalette } from "./custom/palette";
import typography from "./custom/typography";


import shadows from "./custom/shadows";
import customShadows from "./custom/customShadows";
import componentsOverride from "./overrides";

//CONTEXTS
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const ThemeProvider = ({ children }) => {

  //Contexts
  const {isLightMode} = useContext(ThemeContext)
  const {currentLanguage} = useContext(LanguageContext)

  console.log(isLightMode);
  // console.log(currentLanguage);

  const themeOptions = useMemo(() => {
    const palette = isLightMode ? lightPalette : darkPalette;
    return {
      palette: palette,
      typography: typography(currentLanguage, palette),
      shadows: shadows(palette),
      customShadows: customShadows(palette),
      shape: { borderRadius: 6 },
    };
  }, [isLightMode, currentLanguage]);

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
