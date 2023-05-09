// @mui
import { styled } from "@mui/material/styles";
import {
  ListItemIcon,
  ListItemButton,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";

// ----------------------------------------------------------------------

export const StyledSidebarContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  minHeight: "100vh",
}));

export const StyledNavItem = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body1,
  height: 48,
  padding: "1em",
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.grey[700],
  borderRadius: theme.shape.borderRadius * 2,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledBottomNavigation = styled(BottomNavigation)(
  ({ theme, show }) => ({
    backgroundColor: theme.palette.background.paper,
    position: "fixed",
    zIndex: 999,
    bottom: 0,
    left: 0,
    width: "100%",
    height: 65,
    transition: "transform 0.3s ease",
    transform: show ? "translateY(0)" : "translateY(120%)",
    boxShadow: "0 -4px 10px 0 rgba(0, 0, 0, 0.1)",
  })
);

export const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    padding: "5px",
    paddingTop: theme.spacing(1),
    minWidth: "unset",
    height: "100% !important",
  })
);
