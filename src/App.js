import LoginPlain from "./LoginPlain";
import { UserProvider } from "./context";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <LoginPlain />
      </div>
    </UserProvider>
  );
}

export default App;
