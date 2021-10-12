import React, { useContext } from "react";
import MyDropzone from "./MyDropzone";

import { useUserContext, useDispatchContext } from "../UserProvider/context";
import { ActionType } from "./../types/types";
import { login } from "../utils/login";

const LoginPlain: React.FC = () => {
  const userState = useUserContext();
  const { username, password, error, isLoading, logged, message }: any =
    userState;

  const dispatch = useDispatchContext();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch({ type: ActionType.LOADING });

    try {
      await login(username, password);
      dispatch({ type: ActionType.LOGGED });
    } catch (error) {
      dispatch({ type: ActionType.ERROR });
    }
  };

  return (
    <div>
      {logged ? (
        <>
          <p style={{ display: "inline-flex" }}>Welcome!</p>
          <button
            style={{ marginLeft: ".5em" }}
            onClick={(e) =>
              dispatch({
                type: ActionType.LOGOUT,
              })
            }
          >
            Log Out
          </button>
          <MyDropzone />
        </>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <p>My app</p>
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
          <button
            style={{ marginTop: "1vh" }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging..." : "Log In"}
          </button>
          {message && (
            <p style={{ color: "gray", marginTop: "4vh" }}>{message}</p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default LoginPlain;
