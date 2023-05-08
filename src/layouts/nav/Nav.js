import PropTypes from "prop-types";
import { useEffect, useContext, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// @mui
import { Box, Drawer } from "@mui/material";

// hooks
import useResponsive from "../../hooks/useResponsive";

// components
import NavSection from "./NavSection";
//
import navConfig from "./config";
import { LanguageContext } from "../../context/LanguageContext";
import { Clock, Home, MoneyRecive, MoneySend, Profile } from "iconsax-react";
import {
  StyledBottomNavigation,
  StyledBottomNavigationAction,
  StyledSidebarContent,
} from "./styles";
import Logo from "../../components/logo/Logo";

// ----------------------------------------------------------------------
const NAV_WIDTH = 280;

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav() {
  //NAVIGATION
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //CONTEXTS
  const { currentLanguage } = useContext(LanguageContext);

  //REF
  const lastScrollPos = useRef(0);

  //STATES
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(true);

  //CUSTOM HOOKS
  const isDesktop = useResponsive("up", "lg");

  //FUNCS
  //handle scrolling and hide/show the bottom navigation
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos <= lastScrollPos.current;
    setShow(visible);
    lastScrollPos.current = currentScrollPos;
  };

  //handle bottom navigation change
  const handleRouteChange = (event, value) => {
    setValue(value);
    navigate(`/app/${value}`);
  };

  //USEEFCT
  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //JSX
  const renderContent = (
    <StyledSidebarContent>
      <Logo />

      <NavSection data={navConfig} />
    </StyledSidebarContent>
  );

  //NAV COMPONENT
  return (
    <Box>
      {isDesktop ? (
        <Drawer open variant="permanent">
          {renderContent}
        </Drawer>
      ) : (
        <StyledBottomNavigation
          show={show ? 'show' : ''}
          value={value}
          onChange={(event, newValue) => handleRouteChange(event, newValue)}
        >
          <StyledBottomNavigationAction
            label="Home"
            value={"home"}
            icon={<Home />}
          />
          <StyledBottomNavigationAction
            label="Activity"
            value={"activity"}
            icon={<Clock />}
          />
          <StyledBottomNavigationAction
            label="Withdraw"
            value={"withdraw"}
            icon={<MoneyRecive />}
          />
          <StyledBottomNavigationAction
            label="Recharge"
            value={"recharge"}
            icon={<MoneySend />}
          />
          <StyledBottomNavigationAction
            label="Account"
            value={"account"}
            icon={<Profile />}
          />
        </StyledBottomNavigation>
      )}
    </Box>
  );
}
