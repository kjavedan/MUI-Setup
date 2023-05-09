import React, { useContext, useState } from "react";
import PageTitle from "../../components/pageTitle/PageTitle";
import {
  Button,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { requestAmountsArray } from "../../_mock/requestAmounts";
import language from "../../data/language";
import { LanguageContext } from "../../context/LanguageContext";

const RequestRecharge = () => {
  //CONTEXT
  const { currentLanguage } = useContext(LanguageContext);

  //STATE
  const [state, setState] = useState({
    username: "khaled",
    amount: "100",
    note: "",
  });
  const [optionsData, setOptionsData] = useState([]);

  //FUNCS
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <PageTitle value={"requestRecharge"} />
      <Stack>
        <Typography variant="subtitle1" pl={0.5}>
          {language[currentLanguage].amount}
        </Typography>
        <StyledSelect
          name="amount"
          value={state.amount}
          variant="filled"
          onChange={(e) => handleChange(e)}
        >
          {requestAmountsArray.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </StyledSelect>
      </Stack>
      <Stack mt={4}>
        <Typography variant="subtitle1" pl={0.5}>
          note
        </Typography>
        <StyledTextArea minRows={15} maxRows={20} />
      </Stack>
      <Stack mt={4} alignItems={'center'}>
        <Button sx={{width:'fit-content', px: '2em'}} variant="contained" size="large">
          {language[currentLanguage].submit}
        </Button>
      </Stack>
    </div>
  );
};

export default RequestRecharge;

const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.grey[200],
  boxShadow: "none",
  borderRadius: 16,
  paddingBottom: theme.spacing(1.2),
  paddingLeft: theme.spacing(1),
  ":before": {
    border: "none !important",
  },
  ":after": {
    border: "none !important",
  },
}));

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  borderRadius: 16,
  padding: theme.spacing(2),
  border: "none",
  outline: "none",
  backgroundColor: theme.palette.grey[200],
  resize: "none",
}));
