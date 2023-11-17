import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import { addUser, setLogData, setToken } from "./store/slices/user";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
function Login({ addUsers, user, setToken, setLogData }) {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();
  function handleFields(e) {
    setFields((pre) => ({
      ...pre,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmission(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://randomuser.me/api/?inc=login,email,picture"
      );
      const { results } = await response.json();
      const [credsData] = results;
      console.log(results);
      const data = {
        email: credsData.email,
        token: credsData.login.sha256,
        userName: credsData.login.username,
        pic: credsData.picture,
        id: uuid(),
      };
      addUsers(data);
      setLogData(data);
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("logUser", JSON.stringify(data));
      setToken(data.token);
      nav("/");
    } catch (error) {
      alert("Something went wrong");
    }
    setFields({
      email: "",
      password: "",
    });
  }
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              REPL
            </Typography>
            <Box sx={{ flexGrow: 0, ml: "auto" }}>
              <Button
                onClick={() => {
                  nav("/login");
                }}
                sx={{ mr: "20px" }}
                variant="contained"
                color="secondary"
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  nav("/register");
                }}
                sx={{ mr: "20px" }}
                variant="contained"
                color="secondary"
              >
                Sign up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        sx={{ mt: "200px", display: "flex", justifyContent: "center" }}
      >
        <Stack
          onSubmit={onSubmission}
          component={"form"}
          gap={"20px"}
          width={"100%"}
          maxWidth={"450px"}
        >
          <TextField
            id="email"
            required
            type="email"
            onChange={handleFields}
            value={fields.email}
            label="email"
            placeholder="email"
          />
          <TextField
            id="password"
            required
            onChange={handleFields}
            value={fields.password}
            label="password"
            placeholder="password"
            type="password"
          />
          <Button type="submit">Login</Button>
        </Stack>
      </Container>
    </>
  );
}

export default connect(
  (state) => ({ user: state.user }),
  (dispatch) => ({
    addUsers: (val) => dispatch(addUser(val)),
    setToken: (val) => dispatch(setToken(val)),
    setLogData: (val) => dispatch(setLogData(val)),
  })
)(Login);
