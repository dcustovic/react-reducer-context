export const ACTION_LOGIN = {
  LOADING: "loading",
  LOGGED: "logged",
  ERROR: "error",
  LOGOUT: "logout",
  FIELD: "field",
};

export default function reducer(state, action) {
  const { type, usernameAndPassword } = action;
  console.log("CURRENT_STATE: ", state);

  switch (type) {
    case ACTION_LOGIN.LOADING:
      console.log("ACTION_LOADING: ", state);
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    case ACTION_LOGIN.LOGGED:
      console.log("ACTION_LOGGED: ", state);
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
        [usernameAndPassword]: action.value,
      };
    default:
      return state;
  }
}
