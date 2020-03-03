import React, { Component } from "react";
import SearchBar from '../../SearchBar.js';

class QuestionDashboard extends Component {
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
    return (
      <div className="dashboard container">
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
      </div>

    );
  }
}

export default QuestionDashboard;

// <div classname="row">
// <div classname="col s12 m6">
// </div>
// </div>
// <div classname="col s12 m5 offset-m1"></div>
