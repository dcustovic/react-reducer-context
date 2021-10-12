import React, { useReducer } from "react";

import LoginPlain from "./components/LoginPlain";

import reducer from "./reducer";
import { UserContext, DispatchContext, initState } from "./context";

function App() {
  const [userState, dispatch] = useReducer(reducer, initState);

  return (
    <UserContext.Provider value={userState}>
      <DispatchContext.Provider value={dispatch}>
        <div className="App">
          <LoginPlain />
        </div>
      </DispatchContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
