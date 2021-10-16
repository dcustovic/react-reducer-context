import React from "react";
import MyDropzone from "./MyDropzone";
import Snackbar from "./Snackbar";

import {
  useUserContext,
  useDispatchContext,
} from "../containers/UserProvider/context";
import { ActionType } from "./../types/types";

//
const LoginPlain: React.FC = () => {
  const userState = useUserContext();
  const { username, password, error, errorMsg, logged, message } = userState;
  console.log("error: ", error);

  console.log("errorMsg: ", errorMsg);

  const dispatch = useDispatchContext();

  return (
    <div>
      {logged ? (
        <MyDropzone />
      ) : (
        <>
          <form className="form">
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
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              style={{ marginLeft: "5px" }}
              onChange={(e) =>
                dispatch({
                  type: ActionType.FIELD,
                  usernameAndPassword: "password",
                  value: e.target.value,
                })
              }
            />

            <br />

            {message && (
              <p style={{ color: "gray", marginTop: "4vh" }}>{message}</p>
            )}
          </form>
          <Snackbar />
        </>
      )}
    </div>
  );
};

export default LoginPlain;
