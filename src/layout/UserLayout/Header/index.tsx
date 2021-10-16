import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  useDispatchContext,
  useUserContext,
} from "../../../containers/UserProvider/context";
import { ActionType } from "../../../types/types";
import { login } from "../../../utils/login";
import CircularProgress from "@mui/material/CircularProgress";
import ProfileMenu from "./ProfileMenu";

//
const style: React.CSSProperties = {
  padding: "7px 16px",
  marginLeft: ".7rem",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "white",
  color: "black",
};

export default function Header() {
  const dispatch = useDispatchContext();
  const userState = useUserContext();
  const { username, password, isLoading, logged } = userState;

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
        style={{ background: "#7316f5", marginBottom: "2rem", color: "white" }}
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
            <ProfileMenu />
          ) : (
            <form>
              <input
                style={style}
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
                style={style}
              />
              <Button
                onClick={handleLogin}
                disabled={isLoading}
                color="inherit"
                style={{ marginLeft: ".7rem" }}
              >
                {isLoading ? (
                  <CircularProgress style={{ color: "#54b5ff" }} />
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
