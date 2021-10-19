import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./containers/Router";
import UserProvider from "./containers/UserProvider";
import Snackbar from "./components/Snackbar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router />
        <Snackbar />
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
