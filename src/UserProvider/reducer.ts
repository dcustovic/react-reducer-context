import { UserState, UserAction, ActionType } from "../types/types";

export default function reducer(state: UserState, action: UserAction) {
  const { type, usernameAndPassword, value } = action;

  switch (type) {
    case ActionType.LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    case ActionType.LOGGED:
      return {
        ...state,
        isLoading: false,
        logged: true,
        error: "",
      };
    case ActionType.ERROR:
      return {
        ...state,
        error: "Incorrect credentials.",
        isLoading: false,
        username: "",
        password: "",
        message: "",
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        logged: false,
        username: "",
        password: "",
        message: "Goodbye :)",
      };
    case ActionType.FIELD:
      return {
        ...state,
        [usernameAndPassword]: value,
      };
    default:
      return state;
  }
}
