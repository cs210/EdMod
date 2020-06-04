import React, { Component } from "react";
import Fire from "../../config/Fire.js";
import LoginRegister from "./LoginRegister.js";
import Home from "./Home.js";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div>{this.state.user ? <Home /> : <LoginRegister />}</div>;
  }
}

export default SignIn;
