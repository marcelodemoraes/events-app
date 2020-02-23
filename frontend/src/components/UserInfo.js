import React, { Component } from "react";

import api from "../services/api";

//Show the name and email of an user
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  componentDidMount() {
    //set header to always use auth-token when it's available
    api.defaults.headers.common["auth-token"] = localStorage.getItem(
      "authtoken"
    );
    api.get("/user").then(res => {
      const { data } = res;
      if (data) {
        this.setState({
          name: data.name,
          email: data.email
        });
      }
    });
  }

  render() {
    return (
      <div className="user-info">
        <p>Username: {this.state.name}</p>
        <p>E-mail: {this.state.email}</p>
      </div>
    );
  }
}

export default UserInfo;
