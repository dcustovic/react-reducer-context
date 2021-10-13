export enum ActionType {
  LOADING = "loading",
  LOGGED = "logged",
  ERROR = "error",
  LOGOUT = "logout",
  FIELD = "field",
}

export type UserState = {
  username: string;
  password: string | number;
  error: string;
  message: string;
  isLoading: boolean;
  logged: boolean;
};

export interface ErrorType {
  code: string;
  message: string;
}

export interface FileType extends File {
  path?: string;
}

export interface RejectedFileType {
  file: FileType;
  errors: ErrorType[];
}
