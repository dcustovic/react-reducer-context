export type UserState = {
  username: string;
  password: string | number;
  error: string;
  message: string;
  isLoading: boolean;
  logged: boolean;
};

export enum ActionType {
  LOADING = "loading",
  LOGGED = "logged",
  ERROR = "error",
  LOGOUT = "logout",
  FIELD = "field",
}
