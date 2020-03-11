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
      questionList: this.props.questionList,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleTagClick(tag){
    //TODO
    return 0
  }

  fetchFilteredPosts(filterText, tags){
    //currently just store all tokens and keep if token inside 
    //TODO 
    return 0
  }



  makeList() {
    var questions = [];
    var question;
    for (var i in this.state.questionList) {
        question = this.state.questionList[i];
        questions[i] = (
          <ListItem divider={true} button component={RouterLink} to={"/qa/"+question[0]} key={"q_list_"+question[0]} style={{overflow:'hidden'}}>
          <ListItemText primary={question[1]} secondary={question[2]}/>
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
