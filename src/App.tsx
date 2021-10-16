import Router from "./containers/Router";
import UserProvider from "./containers/UserProvider";
import Snackbar from "./components/Snackbar";

function App() {
  return (
    <UserProvider>
      <Router />
      <Snackbar />
    </UserProvider>
  );
}

export default App;
