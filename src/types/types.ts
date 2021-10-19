import { FileError, FileWithPath } from "react-dropzone";

export enum ActionType {
  LOADING = "loading",
  LOGGED = "logged",
  ERROR = "error",
  ERROR_ON_CLOSE = "error on close",
  LOGOUT = "logout",
  FIELD = "field",
}

export interface UserAction {
  type: ActionType;
  usernameAndPassword: string;
  value: any;
}

export interface UserState {
  username: string;
  password: string;
  error: boolean;
  errorMsg: any;
  message: any;
  isLoading: boolean;
  logged: any;
}

export interface RejectedFileType {
  file: FileWithPath;
  errors: FileError[];
}
