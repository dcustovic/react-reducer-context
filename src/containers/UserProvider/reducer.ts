import { UserState, UserAction, ActionType } from "../../types/types";

export default function reducer(state: UserState, action: UserAction) {
  const { type, usernameAndPassword, value } = action;

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
        username: "",
        password: "",
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
