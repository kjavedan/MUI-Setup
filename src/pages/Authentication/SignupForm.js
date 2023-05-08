import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  FormControl,
  Typography,
  FormHelperText,
} from "@mui/material";
import language from "../../data/language";
import { LanguageContext } from "../../context/LanguageContext";
import { Eye, EyeSlash } from "iconsax-react";
import validator from "validator";
import styled from "@emotion/styled";

export default function SignupForm() {
  //NAVIGATION
  const navigate = useNavigate();
  //CONTEXT
  const { currentLanguage } = useContext(LanguageContext);
  //STATES
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    username: "",
    email: "",
    invitationCode: "",
    password: "",
    confirmPassword: "",
  });

  //OBJCTS
  const { username, email, invitationCode, password, confirmPassword } = values;

  //FUNCS
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateFiledNames();
    setErrors(error);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateFiledNames = () => {
    const error = {};
    if (
      validator.isEmpty(username) ||
      validator.isEmpty(email) ||
      validator.isEmpty(confirmPassword) ||
      validator.isEmpty(password) ||
      validator.isEmpty(invitationCode)
    ) {
      error.username = "fillAllFields";
      return error;
    }
    if (validator.matches(username, /[^a-zA-Z0-9]/g)) {
      error.username = "usernameSpecialChar";
    }
    if (!validator.isEmail(email)) {
      error.email = "emailNotValid";
      return error;
    }
    if (password !== confirmPassword) {
      error.password = "passNotMatch";
      return error;
    }
    if (!validator.isStrongPassword(password)) {
      error.password = "passNotStrong";
      return error;
    }

    return error;
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Stack spacing={3} mb={5}>
        {/* USERNAME */}
        <FormControl>
          <Typography variant="h6">Username</Typography>
          <TextField
            id="username"
            name="username"
            value={username}
            error={errors.username  ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <StyledHelperText>
            {language[currentLanguage][errors.username]}
          </StyledHelperText>
        </FormControl>
        {/* EMAIL */}
        <FormControl>
          <Typography variant="h6">Email</Typography>
          <TextField
            id="username"
            name="email"
            value={email}
            error={errors.email  ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <StyledHelperText>
            {language[currentLanguage][errors.email]}
          </StyledHelperText>
        </FormControl>
        {/* INVITATION CODE */}
        <FormControl>
          <Typography variant="h6">invitation code</Typography>
          <TextField
            id="username"
            name="invitationCode"
            value={invitationCode}
            error={errors.invitationCode  ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <StyledHelperText>
            {language[currentLanguage][errors.invitationCode]}
          </StyledHelperText>
        </FormControl>
        {/* PASSWORD */}
        <FormControl>
          <Typography variant="h6">password</Typography>
          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            error={errors.password  ? true : false}
            onChange={(e) => handleChange(e)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledHelperText>
            {language[currentLanguage][errors.password]}
          </StyledHelperText>
        </FormControl>
        {/*CONFIRM PASSWORD */}
        <FormControl>
          <Typography variant="h6">confirm password</Typography>
          <TextField
            id="password"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            error={errors.confirmPassword ?   true : false}
            onChange={(e) => handleChange(e)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledHelperText>
            {language[currentLanguage][errors.confirmPassword]}
          </StyledHelperText>
        </FormControl>
      </Stack>

      <Button fullWidth size="large" type="submit" variant="contained">
        {language[currentLanguage].signup}
      </Button>

      <Stack alignItems="center" sx={{ my: 8 }}>
        <Link variant="body1" onClick={() => navigate("/login")}>
          Already have an account? Login
        </Link>
      </Stack>
    </form>
  );
}

export const StyledHelperText = styled(FormHelperText)(() => ({
  color: "red",
  marginLeft: "unset",
  textTransform: 'capitalize'
}));
