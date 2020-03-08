import React, { Component } from "react";
import QASidebar from './QA_Sidebar.js';
import QADisplay from './QA_Display.js';
import {Paper, Grid} from '@material-ui/core';

class QuestionDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      q_Id: this.props.match.params.q_id,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    console.log(this.props)
    return (
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
        >
        <Grid item sm={3}  alignItems="stretch"> 
            <QASidebar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        </Grid>
        <Grid item sm={9} alignItems="stretch">
          <QADisplay q_id={this.state.q_Id}/>
        </Grid>
      </Grid>

    );
  }
  componentDidMount() {
    this.setState({q_id: this.props.match.params.q_id});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.q_id !== prevState.q_Id) {
      this.setState({q_Id: this.props.match.params.q_id});
    } 
  }
}

export default QuestionDashboard;
