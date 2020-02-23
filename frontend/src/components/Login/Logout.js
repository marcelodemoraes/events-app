import React from "react";

import { history } from "../../history";

//Logout a user by deleting auth token
class Logout extends React.Component {
  userLogout = event => {
    localStorage.removeItem("authtoken");
    history.push("/login");
  };

  render() {
    return (
      <button className="logoutButton" onClick={this.userLogout}>
        Logout
      </button>
    );
  }
}

export default Logout;
