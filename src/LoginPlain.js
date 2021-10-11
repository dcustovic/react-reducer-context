import React, { useReducer } from "react";
import { login } from "./utils";

const LoginPlain = () => {
  const initState = {
    username: "",
    password: "",
    error: "",
    isLoading: false,
    logged: false,
    message: "",
  };

  const ACTION_LOGIN = {
    LOADING: "loading",
    LOGGED: "logged",
    ERROR: "error",
    LOGOUT: "logout",
    FIELD: "field",
  };

  function reducerLogin(state, action) {
    switch (action.type) {
      case ACTION_LOGIN.LOADING:
        return {
          ...state,
          isLoading: true,
          error: "",
          message: "",
        };
      case ACTION_LOGIN.LOGGED:
        return {
          ...state,
          isLoading: false,
          logged: true,
          error: "",
        };
      case ACTION_LOGIN.ERROR:
        return {
          ...state,
          error: "Incorrect credentials.",
          isLoading: false,
          username: "",
          password: "",
          message: "",
        };
      case ACTION_LOGIN.LOGOUT:
        return {
          ...state,
          logged: false,
          username: "",
          password: "",
          message: "Goodbye :)",
        };
      case ACTION_LOGIN.FIELD:
        return {
          ...state,
          [action.usernameAndPassword]: action.value,
        };
      default:
        break;
    }
    return state;
  }

  const [state, dispatch] = useReducer(reducerLogin, initState);
  const { username, password, error, isLoading, logged, message } = state;
  console.log("state: ", state);

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
