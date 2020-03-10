import React, { Component } from "react";
import QASidebar from './QA_Sidebar.js';
import QADisplay from './QA_Display.js';
import {Paper, Grid} from '@material-ui/core';
import mockData from './mockData.js'

class QuestionDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      q_id: this.props.match.params.q_id,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }


getMockList(){
    var questions = [];
    for(var i=0; i<3; i++){
      var info = mockData(i);
      var text = info.text;
      if(text.length > 75){
        text = text.substring(0,75) + "...";
      }
      questions.push([i.toString(), info.title, text])
    }
    return questions;
  }

  
  render() {
    console.log(this.props)
    var list = this.getMockList();
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
              questionList={list}
            />
        </Grid>
        <Grid item sm={9} alignItems="stretch">
          <QADisplay q_id={this.state.q_id}/>
        </Grid>
      </Grid>

    );
  }
  componentDidMount() {
    this.setState({q_id: this.props.match.params.q_id});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.q_id !== prevState.q_id) {
      this.setState({q_id: this.props.match.params.q_id});
    } 
  }
}

export default QuestionDashboard;

/*

*/
