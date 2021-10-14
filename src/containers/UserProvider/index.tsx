import React, { useReducer } from "react";
import reducer from "./reducer";
import { UserContext, DispatchContext, initState } from "./context";

function UserProvider({ children }: any) {
  const [userState, dispatch] = useReducer(reducer, initState);

  return (
    <UserContext.Provider value={userState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </UserContext.Provider>
  );
}

export default UserProvider;
