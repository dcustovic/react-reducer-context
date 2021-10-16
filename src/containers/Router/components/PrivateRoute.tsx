import { Redirect, Route } from "react-router";
import UserLayout from "../../../layout/UserLayout";

import { useUserContext } from "../../UserProvider/context";
import { PATH_TO_AUTH } from "../myRoutes";

//
const PrivateRoute = ({ ...rest }: any) => {
  const { logged, username } = useUserContext();

  if (logged && username !== "") {
    return (
      <UserLayout>
        <Route {...rest} />
      </UserLayout>
    );
  }

  return <Redirect to={PATH_TO_AUTH} />;
};

export default PrivateRoute;
