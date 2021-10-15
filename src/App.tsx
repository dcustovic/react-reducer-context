import Router from "./containers/Router";
import UserProvider from "./containers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
