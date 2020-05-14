import React, { Component } from "react";
import Fire from "../../config/Fire.js";

class Home extends Component {
  logout = () => {
    Fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <h1> Hello! </h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
