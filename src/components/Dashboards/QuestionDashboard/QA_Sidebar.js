import React, { useState, useEffect } from "react";
import SearchBar from '../../SearchBar.js';
import { Link as RouterLink } from 'react-router-dom'
import "../../../styling/qa.css"
import AddIcon from '@material-ui/icons/Add';

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';

const MakeList = (props) => {
  var questions = [];
  var question;
  console.log("FILTER TEXT: ", props.filterText)
  for (var i in props.questionList) {
     question = props.questionList[i];
     const search = props.filterText.toLowerCase();
     const title = question.data.title.toLowerCase();
     
     if (search !== "" && title.indexOf(search) === -1) {
       continue;
     }

     questions[i] = (
       <ListItem divider={true} button component={RouterLink} to={"/qa/"+question.id}
       key={"q_list_"+question.id} className="sidebar_elem"  onClick={() => stopAddPost(props.prevProps)}>

       <ListItemText primary={question.data.title} secondary={question.data.text} className="sidebar_elem_text"/>
       </ListItem>
     );

   }
  return questions
};

const stopAddPost = (props) => {
  props.setNewPost(false);
  console.log(props.newPost)
}

const addPost = (props) => {
  props.setNewPost(true);
  console.log(props.newPost)
}

// change onFilterTextChange to setFilterText in Searchbar
const QASidebar = (props) => {
  const [filterText, setFilterText] = useState(props.filterText)

  return (
    <div className="dashboard container">
      <div className="qa-search-add">
        <SearchBar
          filterText={filterText}
          setFilterText={setFilterText}
        />
        <Button
           variant="contained"
           color="primary"
           size="small"
           className="add-post"
           startIcon={<AddIcon />}
           style={{maxWidth: '120px', maxHeight: '30px', minWidth: '120px', minHeight: '30px', margin: "0px 0px 0px 10px"}}
           onClick={() => addPost(props)}
         >
       Add Post
     </Button>
      </div>
      <List component="nav">
        <MakeList questionList = {props.questionList} prevProps={props} filterText={filterText}/>
      </List>
    </div>
  );
  };

export default QASidebar;
