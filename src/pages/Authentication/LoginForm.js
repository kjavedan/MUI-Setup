//REACT
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//@MUI
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Button,
  Box,
  Typography,
  FormControl,
} from "@mui/material";
//CONTEXTS
import language from "../../data/language";
import { LanguageContext } from "../../context/LanguageContext";
//ICONS
import { Eye, EyeSlash } from "iconsax-react";
//VALIDATOR
import validator from "validator";
//COMPONENTS
import { StyledHelperText } from "./SignupForm";

//-------------------------------------------------------------------------------------------------------------
export default function LoginForm() {
  //NAVIGATION
  const navigate = useNavigate();
  //CONTEXT
  const { currentLanguage } = useContext(LanguageContext);
  //STATES
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  console.log(values);

  //OBJCTS
  const { username, password } = values;

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
    if (validator.isEmpty(username) || validator.isEmpty(password)) {
      error.username = "fillAllFields";
      return error;
    }
    if (validator.matches(username, /[^a-zA-Z0-9]/g)) {
      error.username = "usernameSpecialChar";
    }
    if (!validator.isStrongPassword(password)) {
      error.password = "passNotStrong";
      return error;
    }
    return error;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Stack spacing={3}>
        {/* USERNAME */}
        <FormControl>
          <Typography variant="h6">Username</Typography>
          <TextField
            id="username"
            name="username"
            value={username}
            error={errors.username ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <StyledHelperText>
            {language[currentLanguage][errors.username]}
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
            error={errors.password ? true : false}
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
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Box>
          <Checkbox name="remember" label="Remember me" />
          <Typography variant="caption">Remember me</Typography>
        </Box>
        <Link variant="subtitle2">Forgot password?</Link>
      </Stack>

      <Button fullWidth size="large" type="submit" variant="contained">
        {language[currentLanguage].login}
      </Button>

      <Stack alignItems="center" sx={{ my: 8 }}>
        <Link variant="body1" onClick={() => navigate("/signup")}>
          Don't have an account? Sign up
        </Link>
      </Stack>
    </form>
  );
}
