import React from "react";

import { Router, Route, Switch } from "react-router";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import PrivateRoute from "./components/PrivateRoute";

import { history } from "./history";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/events" component={EventsPage} />
    </Switch>
  </Router>
);

export default Routes;
