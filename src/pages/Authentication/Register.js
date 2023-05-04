import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //NAVIGATION
  const navigat = useNavigate();

  //FUNCS
  const handleSubmit = (e) => {
    e.preventDefault();
    navigat("/home");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField label="email" />
        <TextField label="username" />
        <TextField label="invitatino code" />
        <TextField label="pass" />
        <TextField label="confirm pass" />
        <Button type="submit">register</Button>
      </form>
    </div>
  );
};

export default Register;
