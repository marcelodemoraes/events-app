import React from "react";

import { Route, Redirect } from "react-router-dom";

//Check if user has the authorization token(jwt), if not sends it to the login page
const PrivateRoute = props => {
  const isLogged = !!localStorage.getItem("authtoken");
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
