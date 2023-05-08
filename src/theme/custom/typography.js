//-----------------------------

const pxToRem = (value) => {
  return `${value / 16}rem`;
};

const responsiveFontSizes = ({ sm, md, lg }) => {
  return {
    "@media (min-width: 600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width: 900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width: 1200px)": {
      fontSize: pxToRem(lg),
    },
  };
};
//---------------------------------

const FONT_PRIMARY = {
  Arabic: "Cairo, sans-serif",
  Chinese: "Noto Sans SC, sans-serif",
  Farsi: "Vazirmatn, sans-serif",
  English: "'Poppins, sans-serif",
};

const typography = (language, palette) => ({
  fontFamil: FONT_PRIMARY[language],
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    color: palette.primary.main,
    textTransform: "capitalize",
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    
  },
  h2: {
    fontWeight: 800,
    textTransform: "capitalize",
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    color: palette.text.primary,
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    textTransform: 'capitalize',
    color: palette.text.primary,
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    textTransform: 'capitalize',
    color: palette.text.primary,
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    color: palette.text.secondary,
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    color: palette.text.secondary
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    color: palette.grey[400]
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
});

export default typography;
