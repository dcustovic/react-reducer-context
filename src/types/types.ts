import { FileError, FileWithPath } from "react-dropzone";

export enum ActionType {
  LOADING = "loading",
  LOGGED = "logged",
  ERROR = "error",
  LOGOUT = "logout",
  FIELD = "field",
}

export type UserAction = {
  type: ActionType;
  usernameAndPassword: string;
  value: any;
};

export type UserState = {
  username: string;
  password: string | number;
  error: string;
  message: string;
  isLoading: boolean;
  logged: boolean;
};

export interface RejectedFileType {
  file: FileWithPath;
  errors: FileError[];
}
