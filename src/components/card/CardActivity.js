import styled from "@emotion/styled";
import {
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

const CardActivity = () => {
  //NAVIGATION
  const navigate = useNavigate();

  return (
    <StyledCard>
      <CardHeader
        sx={{ height: 10, mb: 2 }}
        action={
          <IconButton onClick={() => navigate("/app/activity")}>
            <ArrowRight />
          </IconButton>
        }
      />
      <Stack>
        <Typography variant="subtitle2">Someone fall in trap</Typography>
        <Typography variant="body2">Won $129, 5:32PM January 29</Typography>
      </Stack>
      <Stack mt={1}>
        <Typography variant="subtitle2">Someone fall in trap</Typography>
        <Typography variant="body2">Won $129, 5:32PM January 29</Typography>
      </Stack>
      <CardContent></CardContent>
    </StyledCard>
  );
};

export default CardActivity;

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(0, 4),
}));
