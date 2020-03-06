import React, { Component } from "react";
import SearchBar from '../../SearchBar.js';
import { Link as RouterLink } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';

class QASidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      questionList: ['awef?', 'barg?', 'csdf?', 'dabf?'],
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  makeList() {
    var questions = [];
    var question;
    for (var i in this.state.questionList) {
        question = this.state.questionList[i];
        questions[i] = (
          <ListItem divider={true} button component={RouterLink} to={"/qa/"+question} key={"q_list_"+question}>
          <ListItemText primary={question} secondary={"Imagine question here!"}/>
          </ListItem>
        );
    }
    return questions;
  }

  render() {
    return (
      <div className="dashboard container">
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <List component="nav"> 
          {this.makeList()}
        </List>
      </div>
    );
  }
}

export default QASidebar;
