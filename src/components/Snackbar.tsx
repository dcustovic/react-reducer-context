import * as React from "react";

import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import {
  useDispatchContext,
  useUserContext,
} from "../containers/UserProvider/context";
import { ActionType } from "../types/types";

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {
  const userState = useUserContext();
  const { error, errorMsg } = userState;

  const dispatch = useDispatchContext();

  const position: SnackbarOrigin = {
    vertical: "top",
    horizontal: "center",
  };

  return (
    <Snackbar
      open={error}
      message={errorMsg}
      anchorOrigin={position}
      autoHideDuration={2000}
      onClose={() => dispatch({ type: ActionType.ERROR_ON_CLOSE })}
    />
  );
}
