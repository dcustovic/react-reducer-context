import { RouteType, ComponentRoute } from "./types";
import MyDropzone from "../../components/MyDropzone";
import LoginPlain from "../../components/LoginPlain";
import Query from "../../components/Query";
import QueryClick from "../../components/QueryClick";

//
export const PATH_TO_MYAPP = "/myapp";
export const PATH_TO_AUTH = "/login";
export const PATH_TO_QUERY = "/query";
export const PATH_TO_QUERYCLICK = "/queryclick";

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
  {
    name: "query",
    type: RouteType.PRIVATE,
    path: PATH_TO_QUERY,
    component: Query,
    exact: true,
  },
  {
    name: "queryclick",
    type: RouteType.PRIVATE,
    path: PATH_TO_QUERYCLICK,
    component: QueryClick,
    exact: true,
  },
];
