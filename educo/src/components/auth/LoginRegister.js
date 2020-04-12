import React, { Component } from "react";
import "./SignIn.css";
import Fire from "../../config/Fire.js";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fireErrors: "",
      formTitle: "Login",
      loginBtn: true,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = (e) => {
    e.preventDefault();
    Fire.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  render() {
    let errorNotification = this.state.fireErrors ? (
      <div className="Error">{this.state.fireErrors}</div>
    ) : null;

    return (
      <div className="form_block">
        <div id="title">{this.state.formTitle}</div>
        <div className="body">
          {errorNotification}
          <form>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />

            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />

            <input
              type="submit"
              className="loginBtn"
              value="Enter"
              onClick={this.login}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
