import { Redirect, Route } from "react-router";

import { useUserContext } from "../../UserProvider/context";
import { PATH_TO_AUTH } from "../myRoutes";

//
const PrivateRoute = ({ ...rest }: any) => {
  const { logged, username } = useUserContext();

  if (logged === true && username !== "") {
    return <Route {...rest} />;
  }

  return <Redirect to={PATH_TO_AUTH} />;
};

export default PrivateRoute;
