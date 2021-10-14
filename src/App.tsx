import LoginPlain from "./components/LoginPlain";
import UserProvider from "./containers/UserProvider";

function App() {
  return (
    <UserProvider>
      <LoginPlain />
    </UserProvider>
  );
}

export default App;
