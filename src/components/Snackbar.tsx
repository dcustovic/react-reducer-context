import * as React from "react";

import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import {
  useDispatchContext,
  useUserContext,
} from "../containers/UserProvider/context";
import { ActionType } from "../types/types";
import { Alert } from "@mui/material";

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {
  const userState = useUserContext();
  const { error, errorMsg } = userState;
  console.log("error: ", error);

  const dispatch = useDispatchContext();

  const position: SnackbarOrigin = {
    vertical: "top",
    horizontal: "center",
  };

  return (
    <Snackbar
      open={error}
      anchorOrigin={position}
      autoHideDuration={2500}
      onClose={() => dispatch({ type: ActionType.ERROR_ON_CLOSE })}
    >
      <Alert
        onClose={() => dispatch({ type: ActionType.ERROR_ON_CLOSE })}
        severity="error"
        style={{ paddingTop: "0", paddingBottom: "0", marginTop: "0.2rem" }}
      >
        {errorMsg}
      </Alert>
    </Snackbar>
  );
}
