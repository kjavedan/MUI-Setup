import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import language from "../../data/language";
import useResponsive from "../../hooks/useResponsive";

const PageTitle = ({ value }) => {
  //CONTEXT
  const { currentLanguage } = useContext(LanguageContext);

  //HOOKS
  const isDesktop = useResponsive("up", "lg");

  return (
    <Typography variant="h3" mb={6} textAlign={isDesktop ? "left" : "center"}>
      {language[currentLanguage][value]}
    </Typography>
  );
};

export default PageTitle;
