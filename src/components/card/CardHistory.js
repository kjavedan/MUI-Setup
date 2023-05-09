import React, { useContext } from "react";
import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { fDateTime } from "../../utils/formatTime";
import { ArrowDown3 } from "iconsax-react";
import language from "../../data/language";
import { LanguageContext } from "../../context/LanguageContext";

const CardHistory = ({
  requestNumber,
  amount,
  applicationDate,
  approvalDate,
  status,
  note,
  setReload,
  paymentGateway,
}) => {
  //CONTEXT
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <Card sx={{ marginTop: 2 }}>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ArrowDown3 />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Stack>
            <Typography variant="h6">
              {language[currentLanguage].request} # {requestNumber + 1}
            </Typography>
            <Typography variant="caption">
              {fDateTime(applicationDate)}
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container rowGap={3}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                {language[currentLanguage].amount}:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">$5000</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                {language[currentLanguage].status}:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">{status}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                {language[currentLanguage].applicationDate}:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                {fDateTime(applicationDate)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                {language[currentLanguage].approvalDate}:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">{fDateTime(approvalDate)}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                {language[currentLanguage].note}
              </Typography>
              <Typography variant="body2">{note}</Typography>
            </Grid>
            
          </Grid>
        </AccordionDetails>
      </StyledAccordion>
    </Card>
  );
};

export default CardHistory;

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  padding: theme.spacing(1, 2),
}));
