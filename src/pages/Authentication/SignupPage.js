//REACT
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
// @mui
import { styled } from "@mui/material/styles";
import { Container, Stack, Typography } from "@mui/material";
//DATA
import language from "../../data/language";
//CONTEXTS
import { LanguageContext } from "../../context/LanguageContext";
//ASSETS
import moneyImg from "../../assets/images/money.png";
//COMPONENTS
import SignupForm from "./SignupForm";
// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  // border: "solid",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledContent = styled("div")(({ theme }) => ({
  // border: "solid 3px red",
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  paddingBottom: theme.spacing(20),
  [theme.breakpoints.down("lg")]: {
    minHeight: "unset",
  },
}));
const StyledImage = styled("div")(({ theme }) => ({
  // border: "solid 3px blue",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
  width: "50vw",
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const StyledTitle = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  marginTop: "5em",
  display: "none",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
}));

// ----------------------------------------------------------------------

export default function SignupPage() {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <>
      <Helmet>
        <title> {language[currentLanguage].signup} </title>
      </Helmet>
      <StyledRoot>
        <StyledImage>
          <Typography sx={{ marginLeft: "-50px" }} variant="h1">
            Bomei play
          </Typography>
          <img src={moneyImg} alt="" />
        </StyledImage>
        <Container maxWidth="sm">
          <StyledTitle>
            <Typography variant="h1" mb={5} gutterBottom>
              {language[currentLanguage].bomeiPlay}
            </Typography>
          </StyledTitle>

          <StyledContent>
            <Typography variant="h2" my={5} gutterBottom>
              {language[currentLanguage].signup}
            </Typography>
            <SignupForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
