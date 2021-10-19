import { UserState, UserAction, ActionType } from "../../types/types";

export default function reducer(state: UserState, action: UserAction) {
  const { type, usernameAndPassword, value } = action;
  console.log("state: ", state);

  let parseData = JSON.parse(localStorage.getItem("localUser") || "{}");
  let username = localStorage.removeItem(parseData[0]);
  console.log("nesto se desi iz reducera: ", username);
  console.log("parseData: ", parseData);

  switch (type) {
    case ActionType.LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case ActionType.LOGGED:
      return {
        ...state,
        isLoading: false,
        logged: true,
        error: false,
      };

    case ActionType.ERROR:
      return {
        ...state,
        error: true,
        errorMsg: "Incorrect credentials.",
        isLoading: false,
        username: "",
        password: "",
        message: "",
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        logged: false,
        username: localStorage.removeItem(parseData[0]),
        password: localStorage.removeItem(parseData[1]),
      };
    case ActionType.FIELD:
      return {
        ...state,
        [usernameAndPassword]: value,
      };
    case ActionType.ERROR_ON_CLOSE:
      return {
        ...state,
        error: false,
        errorMsg: null,
      };
    default:
      return state;
  }
}
