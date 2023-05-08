import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import { Box, List, ListItemText, ListItemIcon, alpha } from "@mui/material";
//
import { StyledNavItem } from "./styles";
import { LanguageContext } from "../../context/LanguageContext";
import language from "../../data/language";

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 2, pl: 4, pr: 0 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  //SPREAD OBJECT
  const { title, path, icon, info } = item;

  //STATES
  const [open, setOpen] = React.useState(false);

  //FUNCS
  const handleClick = () => {
    setOpen(!open);
  };

  //CONTEXTS
  const { currentLanguage } = useContext(LanguageContext);

  const activStyles = {
    "&.active": {
      color: "text.primary",
      bgcolor: alpha("#C9B6EE", 0.34),
      fontWeight: "fontWeightBold",
    },
  };

  return (
    <>
      <StyledNavItem component={RouterLink} to={path} sx={activStyles}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          disableTypography
          primary={language[currentLanguage][title]}
        />
        {info && info}
      </StyledNavItem>
    </>
  );
}
