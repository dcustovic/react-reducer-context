import { Redirect, Route } from "react-router";
import { PATH_TO_AUTH } from "../myRoutes";
import UserLayout from "../../../layout/UserLayout";
import { useUserContext } from "../../UserProvider/context";

//
const PrivateRoute = ({ ...rest }: any) => {
  const { logged } = useUserContext();

  const localUser = JSON.parse(localStorage.getItem("localUser") || "{}");
  const currentUser = localUser.user;

  if (currentUser || logged) {
    return (
      <UserLayout>
        <Route {...rest} />
      </UserLayout>
    );
  }

  return <Redirect to={PATH_TO_AUTH} />;
};

export default PrivateRoute;
