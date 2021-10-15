import { RouteProps } from "react-router";

export enum RouteType {
  AUTH = "auth",
  PRIVATE = "private",
}

export interface ComponentRoute extends RouteProps {
  name: string;
  type: RouteType;
}
