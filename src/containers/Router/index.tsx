import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import { RouteType } from "./types";
import { PATH_TO_MYAPP, myRoutes } from "./myRoutes";

import AuthRoute from "./components/AuthRoute";
import PrivateRoute from "./components/PrivateRoute";

//

function getRouteType(type: RouteType) {
  switch (type) {
    case RouteType.AUTH:
      return AuthRoute;
    case RouteType.PRIVATE:
      return PrivateRoute;
  }
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {myRoutes.map((oneRoute) => {
          const ComponentType = getRouteType(oneRoute.type);
          return (
            <ComponentType
              path={oneRoute.path}
              exact={oneRoute.exact}
              key={oneRoute.name}
              component={oneRoute.component}
            />
          );
        })}
        <Redirect to={PATH_TO_MYAPP} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
