import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function SimpleLayout() {
  return (
    <StyledRoot>
      <Main>
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
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100vh",
}));
