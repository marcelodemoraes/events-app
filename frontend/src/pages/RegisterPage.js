import React from "react";

import Login from "../components/Login/Login";

import { history } from "../history";
import Register from "../components/Login/Register";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>This is the register page!</h1>
        <Register />
      </>
    );
  }
}

export default RegisterPage;
