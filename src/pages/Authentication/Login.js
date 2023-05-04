import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  //NAVIGATION
  const navigat = useNavigate()

  //FUNCS
  const handleSubmit = (e) => {
    e.preventDefault();
    navigat('/home')
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField label="username" />
        <TextField label="password" />
        <Button type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
