import React from "react";

import Login from "../components/Login/Login";

import { history } from "../history";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>This is the login page!</h1>
        <div className="auth-buttons">
          <Login />
        </div>
      </>
    );
  }
}

export default LoginPage;
