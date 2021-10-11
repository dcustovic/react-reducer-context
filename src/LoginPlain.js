import React, { useContext } from "react";

import { login } from "./utils";

import { UserContext, DispatchContext } from "./context";
import { ACTION_LOGIN } from "./reducer";

const LoginPlain = () => {
  const userState = useContext(UserContext);
  const { username, password, error, isLoading, logged, message } = userState;

  const dispatch = useContext(DispatchContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: ACTION_LOGIN.LOADING });

    try {
      await login({ username, password });
      dispatch({ type: ACTION_LOGIN.LOGGED });
    } catch (error) {
      dispatch({ type: ACTION_LOGIN.ERROR });
    }
  };

  return (
    <div>
      {logged ? (
        <>
          <p>
            Successfully logged{" "}
            <span style={{ color: "green" }}>{username}</span>.
          </p>
          <button
            onClick={(e) =>
              dispatch({
                type: ACTION_LOGIN.LOGOUT,
              })
            }
          >
            Log Out
          </button>
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
                type: ACTION_LOGIN.FIELD,
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
                type: ACTION_LOGIN.FIELD,
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
