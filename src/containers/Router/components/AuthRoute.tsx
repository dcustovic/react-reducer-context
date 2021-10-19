import { Redirect, Route } from "react-router";
import UserLayout from "../../../layout/UserLayout";

import { useUserContext } from "../../UserProvider/context";
import { PATH_TO_QUERY } from "../myRoutes";

//
const AuthRoute = ({ ...rest }) => {
  const { logged } = useUserContext();

  if (!logged) {
    return (
      <UserLayout>
        <Route {...rest} />
      </UserLayout>
    );
  }

  return <Redirect to={PATH_TO_QUERY} />;
};

export default AuthRoute;
