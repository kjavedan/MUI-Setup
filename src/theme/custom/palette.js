import { alpha } from "@mui/material/styles";
//----------------------------------------

//SETUP COLORS
//LIGHT
const GREY_LIGHT = {
  100: "#F3F5F9",
  200: "#EFEFEF",
  300: "#C7C7C7",
  400: "#B8B8B8",
  500: "#A6A5A5",
  600: "#727272",
  700: "#454F5B",
  800: "#36363E",
  900: "#202028",
};

const PRIMARY_LIGHT = {
  lighter: "#C9B6EE",
  light: "#A57EDC",
  main: "#7D56DA",
  dark: "#5A3F96",
  darker: "#372A53",
  contrastText: "#fff",
};

const SECONDARY_LIGHT = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const INFO_LIGHT = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS_LIGHT = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY_LIGHT[800],
};

const WARNING_LIGHT = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY_LIGHT[800],
};

const ERROR_LIGHT = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const lightPalette = {
  common: { balck: "#000", white: "#fff" },
  primary: PRIMARY_LIGHT,
  secondary: SECONDARY_LIGHT,
  info: INFO_LIGHT,
  success: SUCCESS_LIGHT,
  warning: WARNING_LIGHT,
  error: ERROR_LIGHT,
  grey: GREY_LIGHT,
  divider: alpha(GREY_LIGHT[500], 0.25),
  text: {
    primary: GREY_LIGHT[900],
    secondary: GREY_LIGHT[600],
    disabled: GREY_LIGHT[500],
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: GREY_LIGHT[200],
  },
  action: {
    active: GREY_LIGHT[600],
    hover: alpha(GREY_LIGHT[500], 0.08),
    selected: alpha(GREY_LIGHT[500], 0.16),
    disabled: alpha(GREY_LIGHT[500], 0.8),
    disabledBackground: alpha(GREY_LIGHT[500], 0.24),
    focus: alpha(GREY_LIGHT[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

//DARK
const GREY_DARK = {
  100: "#F3F5F9",
  200: "#454F5B",
  300: "#C7C7C7",
  400: "#B8B8B8",
  500: "#A6A5A5",
  600: "#7A7A7A",
  700: "#454F5B",
  800: "#36363E",
  900: "#202028",
};

const PRIMARY_DARK = {
  lighter: "#C9B6EE",
  light: "#A57EDC",
  main: "#7D56DA",
  dark: "#5A3F96",
  darker: "#372A53",
  contrastText: "#fff",
};

const SECONDARY_DARK = {
  lighter: "#84A9FF",
  light: "#526CD0",
  main: "#3355CC",
  dark: "#1E3A8A",
  darker: "#101D42",
  contrastText: "#fff",
};

const INFO_DARK = {
  lighter: "#74CAFF",
  light: "#1C9BFF",
  main: "#006ED2",
  dark: "#0052AC",
  darker: "#003D7A",
  contrastText: "#fff",
};

const SUCCESS_DARK = {
  lighter: "#C2F0B2",
  light: "#87D37C",
  main: "#3F9142",
  dark: "#2E6A2C",
  darker: "#1B441C",
  contrastText: GREY_DARK[800],
};

const WARNING_DARK = {
  lighter: "#FFE16A",
  light: "#FFC107",
  main: "#FFA000",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY_DARK[800],
};

const ERROR_DARK = {
  lighter: "#FFA48D",
  light: "#FF4842",
  main: "#D32F2F",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const darkPalette = {
  common: { balck: "#000", white: "#fff" },
  primary: PRIMARY_DARK,
  secondary: SECONDARY_DARK,
  info: INFO_DARK,
  success: SUCCESS_DARK,
  warning: WARNING_DARK,
  error: ERROR_DARK,
  grey: GREY_DARK,
  divider: alpha(GREY_DARK[500], 0.25),

  text: {
    primary: GREY_DARK[100],
    secondary: GREY_DARK[300],
    disabled: GREY_DARK[500],
  },
  background: {
    paper: GREY_DARK[800],
    default: "#181820",
    neutral: GREY_DARK[700],
  },
  action: {
    active: GREY_DARK[100],
    hover: alpha(GREY_DARK[100], 0.08),
    selected: alpha(GREY_DARK[100], 0.16),
    disabled: alpha(GREY_DARK[100], 0.3),
    disabledBackground: alpha(GREY_DARK[500], 0.24),
    focus: alpha(GREY_DARK[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.5,
  },
};

export { lightPalette, darkPalette };
