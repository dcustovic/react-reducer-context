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
//

export default function Header() {
  const userState = useUserContext();
  const { username, password, isLoading, logged } = userState;
  console.log("isLoading : ", isLoading);

  const dispatch = useDispatchContext();

  async function handleLogin(e: { preventDefault: () => void }) {
    e.preventDefault();

    dispatch({ type: ActionType.LOADING });

    try {
      await login(username, password);
      dispatch({ type: ActionType.LOGGED });
    } catch (error) {
      dispatch({ type: ActionType.ERROR, payload: error });
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            <Button
              color="inherit"
              onClick={() => dispatch({ type: ActionType.LOGOUT })}
            >
              Log out
            </Button>
          ) : (
            <Button onClick={handleLogin} color="inherit" disabled={isLoading}>
              {isLoading ? <CircularProgress color="inherit" /> : "Log in"}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
