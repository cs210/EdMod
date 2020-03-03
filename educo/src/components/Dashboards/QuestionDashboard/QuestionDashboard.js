import React, { Component } from "react";
import QASidebar from './QA_Sidebar.js';
import {Paper, Grid} from '@material-ui/core';

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
        <Grid item sm={3}>
          <Paper  className="cs142-main-grid-item">
            <QASidebar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className="cs142-main-grid-item">
        </Paper>
        </Grid>
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
