import { LanguageContext } from "../../context/LanguageContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//@MUI
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  CardHeader,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { ArrowLeft3, Home, Moon, Sun1 } from "iconsax-react";
//ASSETS
import avatar from "../../assets/images/avatar.png";
import chinaFlag from "../../assets/images/chinaFlag.png";
import britishFlag from "../../assets/images/britishFlag.png";
import useResponsive from "../../hooks/useResponsive";
import { ThemeContext } from "../../context/ThemeContext";
//----------------------------------------------------------

const Header = () => {
  //NAVIGATION
  const navigate = useNavigate();
  const location = useLocation();
  //CONTEXT
  const { currentLanguage, handleLanguageToggle } = useContext(LanguageContext);
  const { isLightMode, toggleThemeMode } = useContext(ThemeContext);

  //REF
  const lastScrollPos = useRef(0);

  //STATES
  const [show, setShow] = useState(true);

  //HOOKS
  const isDesktop = useResponsive("up", "lg");

  //FUNCS
  const handleScroll = () => {
    if (!isDesktop) {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos > lastScrollPos.current;
      setShow(visible);
      lastScrollPos.current = currentScrollPos;
    } else {
      setShow(true);
    }
  };

  const handleArrowBackClick = () => {
    location.pathname !== "/app/home" && navigate(-1);
  };
  //USEEFECT
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar show={show ? "show" : ""}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="arrow"
            onClick={handleArrowBackClick}
          >
            {location.pathname === "/app/home" ? <Home /> : <ArrowLeft3 />}
          </IconButton>

          <Avatar
            sx={{ width: 30, height: 30, ml: "auto", mr: 1 }}
            alt="avatar"
            src={avatar}
            onClick={() => navigate("/app/account")}
          />
          <Avatar
            sx={{ width: 30, height: 30, mr: 1 }}
            alt="flag"
            src={currentLanguage === "en" ? britishFlag : chinaFlag}
            onClick={handleLanguageToggle}
          />
          <Avatar
            sx={{ width: 35, height: 35, bgcolor: "#EBEBEB", color: "#000" }}
            onClick={toggleThemeMode}
          >
            {isLightMode ? <Sun1 /> : <Moon />}
          </Avatar>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Header;

const StyledAppBar = styled(AppBar)(({ theme, show }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: "unset",
  position: "fixed",
  zIndex: 999,
  bottom: 0,
  left: 0,
  width: "100%",
  height: 65,
  transition: "transform 0.3s ease",
  transform: show ? "translateY(0)" : "translateY(-120%)",
  color: theme.palette.text.primary,

  [theme.breakpoints.up("lg")]: {
    width: "calc(100vw - 280px)",
    right: 0,
    left: "unset",
  },
}));
