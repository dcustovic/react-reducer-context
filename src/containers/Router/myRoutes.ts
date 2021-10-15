import { RouteType, ComponentRoute } from "./types";
import LoginPlain from "../../components/LoginPlain";
import MyDropzone from "../../components/MyDropzone";

//
export const PATH_TO_MYAPP = "/myapp";
export const PATH_TO_AUTH = "/login";

export const myRoutes: Array<ComponentRoute> = [
  {
    name: "login",
    type: RouteType.AUTH,
    path: PATH_TO_AUTH,
    component: LoginPlain,
    exact: true,
  },
  {
    name: "myapp",
    type: RouteType.PRIVATE,
    path: PATH_TO_MYAPP,
    component: MyDropzone,
    exact: true,
  },
];
