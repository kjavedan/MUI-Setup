import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowRight } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";
//ASSETS
import cointImg from "../../assets/images/coinImg.png";
const CardRecharge = () => {
  //NAVIGATION
  const navigate = useNavigate();

  return (
    <StyledCard>
      <CardHeader
        sx={{ height: 10, mb: 2 }}
        action={
          <IconButton onClick={() => navigate("/app/recharge")}>
            <ArrowRight />
          </IconButton>
        }
      />
      <Stack direction={'row'}>
        <Avatar src={cointImg} alt="coin" sx={{mr: 1}}/>
        <Box >
          <Typography variant="subtitle2">Special Offer</Typography>
          <Typography variant="body1">500 Coins with $400</Typography>
        </Box>
      </Stack>
      <CardContent></CardContent>
    </StyledCard>
  );
};

export default CardRecharge;

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(0, 4),
}));
