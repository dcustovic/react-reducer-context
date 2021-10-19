import { createContext, useContext } from "react";
import { UserState } from "../../types/types";

export const initState: UserState = {
  username: null,
  password: null,
  error: false,
  errorMsg: null,
  message: null,
  isLoading: false,
  logged: false,
};

export const UserContext = createContext<UserState | undefined>(undefined);
export const DispatchContext = createContext<React.Dispatch<any> | undefined>(
  undefined
);

export function useUserContext() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext needs to be in the UserProvider");
  }
  return context;
}

export function useDispatchContext() {
  const context = useContext(DispatchContext);

  if (context === undefined) {
    throw new Error("useDispatchContext needs to be in the DispatchProvider");
  }
  return context;
}
