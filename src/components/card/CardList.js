import styled from "@emotion/styled";
import {
  Avatar,
  Card,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { ArrowRight } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";
const CardList = ({ title, icon, navigateTo, handleBuy }) => {
  //NAVIGATION
  const navigate = useNavigate();

  //FUNCS
  const handleClick = () => {
    navigateTo ? navigate(navigateTo) : handleBuy();
  };
  return (
    <StyledCard onClick={handleClick}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="arrow">
            <ArrowRight />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "primary.lighter" }}>{icon}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} />
      </ListItem>
    </StyledCard>
  );
};

export default CardList;

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(2),
}));
