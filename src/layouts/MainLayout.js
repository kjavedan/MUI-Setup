import { useState } from "react";
import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import Header from "./header";
import Nav from "./nav";

// ----------------------------------------------------------------------

export default function MainLayout() {
  //STATES
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Main>
        <Nav />
        <Header />
        <Outlet />
      </Main>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------
const StyledRoot = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
  // border: "solid 2px red",
});

const Main = styled("div")(({ theme }) => ({
  // border: "solid",
  flexGrow: 1,
  overflow: "auto",
  minHeight: "99vh",
  position: "relative",
  padding: theme.spacing(10, 2),
  overflowX: "hidden",

  [theme.breakpoints.up("lg")]: {
    width: "calc(100vw - 280px)",
    float: "right",
    padding: theme.spacing(12, 5),
  },
}));
