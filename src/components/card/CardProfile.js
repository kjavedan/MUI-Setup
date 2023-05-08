import styled from "@emotion/styled";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowRight } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import avatarImg from "../../assets/images/avatar.png";
const CardProfile = () => {
  //NAVIGATION
  const navigate = useNavigate();

  //HOOKS
  const isDesktop = useResponsive("up", "lg");

  return (
    <StyledCard>
      <CardHeader
        sx={{ height: 15, mb: 2 }}
        action={
          <IconButton onClick={() => navigate("/app/account")}>
            <ArrowRight />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container rowSpacing={2}>
          {isDesktop && (
            <Grid
              item
              display={"grid"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              // border={"solid"}
            >
              <Avatar sx={{ height: 90, width: 90 }} src={avatarImg} />
              <Typography variant="h6" textAlign={"center"}>
                khaled
              </Typography>
              <Typography variant="caption">khaled@gmail.com</Typography>
            </Grid>
          )}

          <Grid item xs={6}>
            <Typography variant="h6">Balance:</Typography>
          </Grid>
          <Grid item xs={6}>
            <StyledTypo variant="subtitle1">$5000</StyledTypo>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">UUID:</Typography>
          </Grid>
          <Grid item xs={6}>
            <StyledTypo variant="subtitle1">BP_x3d3W</StyledTypo>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Role:</Typography>
          </Grid>
          <Grid item xs={6}>
            <StyledTypo variant="subtitle1">User</StyledTypo>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default CardProfile;

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
  
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(2, 4),
    paddingTop: 0,
  },
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    textAlign: "right",
  },
}));
