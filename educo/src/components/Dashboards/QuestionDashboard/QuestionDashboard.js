import React, { Component } from "react";
import QASidebar from './QA_Sidebar.js';
import QADisplay from './QA_Display.js';
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
        <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        >
        <Grid item sm={3}  alignItems="stretch"> 
            <QASidebar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        </Grid>
        <Grid item sm={9} alignItems="stretch">
          <QADisplay/>
        </Grid>
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
