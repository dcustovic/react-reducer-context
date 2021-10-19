import { Redirect, Route } from "react-router";
import { PATH_TO_AUTH } from "../myRoutes";
import UserLayout from "../../../layout/UserLayout";

//
const PrivateRoute = ({ ...rest }: any) => {
  // const { logged, username } = useUserContext();

  let localUser = JSON.parse(localStorage.getItem("localUser") || "{}");
  let loggedIn = localUser.loggedIn;

  if (loggedIn) {
    return (
      <UserLayout>
        <Route {...rest} />
      </UserLayout>
    );
  }

  return <Redirect to={PATH_TO_AUTH} />;
};

export default PrivateRoute;
