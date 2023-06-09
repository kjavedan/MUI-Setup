// ----------------------------------------------------------------------

export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[200],
          boxShadow: theme.customShadows.card,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: "relative",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          cursor: "pointer",
          maxWidth: 1000,
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.01)",
            boxShadow: theme.shadows[8],
          },
          "&:hover, &:focus": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: { variant: "body2" },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
}
