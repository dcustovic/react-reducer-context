import { Redirect, Route } from "react-router";

import { useUserContext } from "../../UserProvider/context";
import { PATH_TO_MYAPP } from "../myRoutes";

//
const AuthRoute = ({ ...rest }) => {
  const { logged } = useUserContext();

  if (!logged) {
    return <Route {...rest} />;
  }

  return <Redirect to={PATH_TO_MYAPP} />;
};

export default AuthRoute;
