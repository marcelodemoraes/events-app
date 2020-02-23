import React, { Component } from "react";
import api from "../../services/api";

import { history } from "../../history";

//Logs in an user and sends it to the home page
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    api
      .post("/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        const { data } = res;
        if (data) {
          localStorage.setItem("authtoken", data);
          history.push("/");
        } else {
          console.log("error");
        }
      })
      .catch(() => {
        console.log("Wrong email or password!");
        this.setState({ errorMsg: "Wrong email or password!" });
      });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  registerPage = event => {
    history.push("/register");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
              Login
            </button>
            <button id="register-button" onClick={this.registerPage}>
              Register
            </button>
            <p className="errorMsg">{this.state.errorMsg}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
