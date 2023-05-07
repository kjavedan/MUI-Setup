import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";
// import Authenticate from '../services/authService';
import language from "../../data/language";
import { LanguageContext } from "../../context/LanguageContext";
import { Eye, EyeSlash } from "iconsax-react";

export default function LoginForm() {
  //NAVIGATION
  const navigate = useNavigate();
  //CONTEXT
  const { currentLanguage } = useContext(LanguageContext);
  //STATES
  const [showPassword, setShowPassword] = useState(false);
  //FUNCS
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Stack spacing={3}>
        <TextField id="username" name="username" label="User Name" />

        <TextField
          id="password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
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
