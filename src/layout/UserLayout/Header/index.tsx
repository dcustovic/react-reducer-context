import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

import {
  useDispatchContext,
  useUserContext,
} from "../../../containers/UserProvider/context";
import { ActionType } from "../../../types/types";
import { login } from "../../../utils/login";
import ProfileMenu from "./ProfileMenu";

//
const useStyles = makeStyles((theme: Theme) => ({
  inputStyle: {
    padding: "6px 16px",
    marginLeft: ".6rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#f6f2ff",
    color: "black",
  },
}));

export default function Header() {
  const dispatch = useDispatchContext();
  const userState = useUserContext();
  const { username, password, isLoading, logged } = userState;
  const classes = useStyles();

  async function handleLogin(e: { preventDefault: () => void }) {
    e.preventDefault();

    dispatch({ type: ActionType.LOADING });

    try {
      await login(username, password);
      dispatch({ type: ActionType.LOGGED });
    } catch (error) {
      dispatch({ type: ActionType.ERROR });
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: "#6e13ed",
          marginBottom: "2rem",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My app
          </Typography>

          {logged ? (
            <>
              <ProfileMenu />
            </>
          ) : (
            <form>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) =>
                  dispatch({
                    type: ActionType.FIELD,
                    usernameAndPassword: "username",
                    value: e.target.value,
                  })
                }
                className={classes.inputStyle}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) =>
                  dispatch({
                    type: ActionType.FIELD,
                    usernameAndPassword: "password",
                    value: e.target.value,
                  })
                }
                className={classes.inputStyle}
              />
              <Button
                onClick={handleLogin}
                disabled={isLoading}
                color="inherit"
                style={{ marginLeft: "1rem" }}
              >
                {isLoading ? (
                  <CircularProgress style={{ color: "#59d0ff" }} size={30} />
                ) : (
                  "Log in"
                )}
              </Button>
            </form>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
