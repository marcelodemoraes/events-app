import React, { Component } from "react";
import api from "../../services/api";

import { history } from "../../history";

//Logs in an user and sends it to the home page
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errorMsg: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    api
      .post("/register", {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
      .then(res => {
        const { data } = res;
        if (data) {
          localStorage.setItem("authtoken", data);
          history.push("/login");
        } else {
          console.log("error");
        }
      })
      .catch(() => {
        this.setState({ errorMsg: "Something went wrong!" });
      });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-block">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              className="form-input"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              id="email"
              className="form-input"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-block">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              className="form-input"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-block">
            <button type="submit" className="form-submit">
              Resgister
            </button>
            <p className="errorMsg">{this.state.errorMsg}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
