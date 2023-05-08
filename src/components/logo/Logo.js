import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <StyledLogo>
      <Typography variant="h1" component={"div"}>
        B
        <span
          style={{
            textTransform: "lowercase",
            fontSize: ".7em",
            color: "#000",
          }}
        >
          omei play
        </span>
      </Typography>
    </StyledLogo>
  );
};

export default Logo;

export const StyledLogo = styled(Box)(({ theme }) => ({
  // border: "solid 2px green",
  padding: theme.spacing(3),
}));
