import React, { Component } from "react";
import DefaultProgressDisplay from "./defaultDashboard.js";

class ProgressDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    console.log("ProgressDashboard")
     return (
      <DefaultProgressDisplay/>
    );
  }
}

export default ProgressDashboard;
