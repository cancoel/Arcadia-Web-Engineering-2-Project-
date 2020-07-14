import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ path, component: Component }) {
  const isLoggedIn = true; //get from redux store
  const destination = isLoggedIn ? <Component /> : <Redirect to="/" />;

  return <Route path={path}>{destination}</Route>;
}

export default PrivateRoute;
