import React, { useState, useEffect } from "react";
import SearchBar from '../../SearchBar.js';
import { Link as RouterLink } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';

const MakeList = (props) => {
  console.log("In makeList, ", props);
  var questions = [];
  var question;
  for (var i in props.questionList) {
     question = props.questionList[i];
     console.log(question);

     questions[i] = (
       <ListItem divider={true} button component={RouterLink} to={"/qa/"+question.id} key={"q_list_"+question.id} style={{overflow:'hidden'}}>
       <ListItemText primary={question.data.title} secondary={question.data.text}/>
       </ListItem>
     );
   }
  return questions
};


// change onFilterTextChange to setFilterText in Searchbar
const QASidebar = (props) => {
  const [filterText, setFilterText] = useState(props.filterText)

  console.log("props", props)
  return (
    <div className="dashboard container">
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <List component="nav">
        <MakeList questionList = {props.questionList} />
      </List>
    </div>
  );
  };

export default QASidebar;

  // handleFilterTextChange(filterText) {
  //   this.setState({
  //     filterText: filterText
  //   });
  // }
  //
  // handleTagClick(tag){
  //   //TODO
  //   return 0
  // }
  //
  // fetchFilteredPosts(filterText, tags){
  //   //currently just store all tokens and keep if token inside
  //   //TODO
  //   return 0
  // }
