import React, { Component } from "react";

import UserInfo from "../components/UserInfo";

import { history } from "../history";

class HomePage extends Component {
  handleSubmit = event => {
    event.preventDefault();
    history.push("/events");
  };

  render() {
    return (
      <>
        <h1>This is the home page!</h1>
        <h2>Logged in as:</h2>
        <UserInfo />
        <button type="submit" onClick={this.handleSubmit}>
          Go to Events page
        </button>
      </>
    );
  }
}

export default HomePage;
