import React, { useState, useEffect } from "react";
import SearchBar from '../../SearchBar.js';
import { Link as RouterLink } from 'react-router-dom'
import "../../../styling/qa.css"
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';

const formatDate = (date) => {
  var curr_date = new Date(date.seconds * 1000);
  var start = moment().startOf('day').toDate(); // set to 12:00 am today
  var end = moment().endOf('day').toDate(); // set to 23:59 pm today
  var newDate;

  // posted today; show in hour:min format
  if (curr_date > start && curr_date < end) {
    var hours = curr_date.getHours();
    var suffix = (hours >= 12)? ' PM' : ' AM';

    //only -12 from hours if it is greater than 12 (if not back at mid night)
    hours = (hours > 12)? hours -12 : hours;

    //if 00 then it is 12 am
    hours = (hours == '00')? 12 : hours;

    var minutes = "0" + curr_date.getMinutes();
    newDate = hours + ':' + minutes.substr(-2) + suffix;
  } else {

  // posted on a previous day; show in month/day/year format
    var month = curr_date.getUTCMonth() + 1; //months from 1-12
    var day = curr_date.getUTCDate();
    var year = curr_date.getUTCFullYear();
    newDate = month + "/" + day +  "/" +  year.toString().slice(-2);
  }
  return newDate;
}

const MakeList = (props) => {
  var questions = [];
  var question;
  var date;
  for (var i in props.questionList) {
     question = props.questionList[i];
     const search = props.filterText.toLowerCase();
     const title = question.data.title.toLowerCase();
     date = formatDate(question.date);
     if (search !== "" && title.indexOf(search) === -1) {
       continue;
     }

     questions[i] = (
       <ListItem divider={true} button component={RouterLink} to={"/qa/"+question.id}
       key={"q_list_"+question.id} className="sidebar_elem"  onClick={() => stopAddPost(props.prevProps)}>

       <div className = "sidebar_elem_text">
        <div className = "sidebar_title">
          <Typography style={{fontWeight: '550', fontSize: '14px' }}>{question.data.title}</Typography>
          <div className = "sidebar_date">{date}</div>
        </div>
        <Typography style={{fontWeight: '400', fontSize: '14px', color: 'grey'}}>{question.data.text}</Typography>
       </div>

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
      <List component="nav" style={{ position: 'relative', overflow: 'auto', height: '100vh'}}>
        <MakeList questionList = {props.questionList} prevProps={props} filterText={filterText}/>
      </List>
    </div>
  );
  };

export default QASidebar;
