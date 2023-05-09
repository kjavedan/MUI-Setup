import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import gameImg from "../../assets/images/gameImg.png";
const CardGame = ({ img }) => {
  return (
    <StyledGameCard>
      <CardMedia sx={{ height: 115 }} image={img} />
      <StyledCardActionArea>
        <Typography variant="subtitle2">Arcade game</Typography>
        <Typography variant="body2">
          Play to win thousonds of dollors
        </Typography>
      </StyledCardActionArea>
    </StyledGameCard>
  );
};

export default CardGame;

const StyledGameCard = styled(Card)(({ theme }) => ({
  minWidth: 200,
  [theme.breakpoints.up("lg")]: {
    minWidth: "unset",
  },
}));
const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: "unset",
  backgroundColor: theme.palette.grey[200],
}));
