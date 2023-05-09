import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import React from "react";
import CardProfile from "../components/card/CardProfile";
import Games from "../components/Games";
import useResponsive from "../hooks/useResponsive";
import CardActivity from "../components/card/CardActivity";
import CardRecharge from "../components/card/CardRecharge";

const Home = () => {
  //HOOKS
  const isDesktop = useResponsive("up", "lg");

  return (
    <>
      <Grid container maxWidth={1200}>
        {!isDesktop ? (
          <>
            <StyledGridItem item xs={12} lg={5}>
              <Typography variant="h4">info</Typography>
              <CardProfile />
            </StyledGridItem>
            <StyledGridItem item xs={12} lg={7}>
              <Typography variant="h4">Games</Typography>
              <Games />
            </StyledGridItem>
          </>
        ) : (
          <>
            <StyledGridItem item xs={12} lg={7.6}>
              <Typography variant="h4">Games</Typography>
              <Games />
            </StyledGridItem>
            <StyledGridItem item xs={12} lg={4.3}>
              <Typography variant="h4">info</Typography>
              <CardProfile />
            </StyledGridItem>
          </>
        )}

        <StyledGridItem item xs={12} lg={7}>
        <Typography variant="h4">Activity</Typography>
          <CardActivity />
        </StyledGridItem>
        <StyledGridItem item xs={12} lg={5}>
        <Typography variant="h4">Recharge</Typography>
          <CardRecharge />
        </StyledGridItem>
      </Grid>
    </>
  );
};

export default Home;

const StyledGridItem = styled(Grid)(({ theme }) => ({
  // border: "solid 3px green",
  padding: theme.spacing(2, 0),

  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(2),
  },
}));
