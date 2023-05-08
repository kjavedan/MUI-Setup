import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";
import useResponsive from "../../hooks/useResponsive";
import CardGame from "../../components/card/CardGame";
const Games = () => {
  //HOOKS
  const isDesktop = useResponsive("up", "lg");

  return (
    <>
      {isDesktop ? (
        <GamesDesktop container>
          <StyledGridItem item lg={12}>
            <CardGame />
          </StyledGridItem>
          <StyledGridItem item lg={6}>
            <CardGame />
          </StyledGridItem>
          <StyledGridItem item lg={6}>
            <CardGame />
          </StyledGridItem>
        </GamesDesktop>
      ) : (
        <GamesMobile>
          <CardGame />
          <CardGame />
          <CardGame />
        </GamesMobile>
      )}
    </>
  );
};

export default Games;

const GamesMobile = styled(Box)(({ theme }) => ({
  minHeight: 200,
  // border: "solid 1px yellow",
  display: "flex",
  width: "100vw",
  overflowX: "scroll",
  gap: 10,
}));

const GamesDesktop = styled(Grid)(({ theme }) => ({
  minHeight: 300,
  // border: "solid 1px yellow",
  rowGap: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {
    marginLeft: "-16px",
  },
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  // border: "solid 2px red",
  padding: theme.spacing(0, 2),
}));
