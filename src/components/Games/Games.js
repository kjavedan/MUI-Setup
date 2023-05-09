import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";
import useResponsive from "../../hooks/useResponsive";
import CardGame from "../../components/card/CardGame";
import cover_1 from "../../assets/images/cover_1.jpg";
import cover_2 from "../../assets/images/cover_2.jpg";
import cover_3 from "../../assets/images/cover_3.jpg";
const Games = () => {
  //HOOKS
  const isDesktop = useResponsive("up", "lg");

  return (
    <>
      {isDesktop ? (
        <GamesDesktop container>
          <StyledGridItem item lg={12}>
            <CardGame img={cover_1} />
          </StyledGridItem>
          <StyledGridItem item lg={6}>
            <CardGame img={cover_2} />
          </StyledGridItem>
          <StyledGridItem item lg={6}>
            <CardGame img={cover_3} />
          </StyledGridItem>
        </GamesDesktop>
      ) : (
        <GamesMobile>
          <CardGame img={cover_1} />
          <CardGame img={cover_2} />
          <CardGame img={cover_3} />
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
  paddingRight: theme.spacing(4.5),
  paddingBottom: theme.spacing(3),
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
