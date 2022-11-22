import React from "react";
export { HomePage } from "./home/index";

export const LoginPage = React.lazy(() => import("./login/index"));
export const CharacterPage = React.lazy(() => import("./character/index"));
