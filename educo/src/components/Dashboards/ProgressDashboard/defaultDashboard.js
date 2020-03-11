import React, { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ProgressCards from './progressCard.js'
import ToDoCard from './ToDoComponent.js'

import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Divider,
  Container,
  Button,
  Grid,
  IconButton
}
from '@material-ui/core';


class DefaultProgressDisplay extends Component {
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
    var lesson_ids = ["Lesson 2 - Learning about Chatbots", "Lesson 3 - Starting to Code"];
    console.log(lesson_ids)
    return (
      <Grid container direction="column" spacing={1} justify="space-between" >
        <Grid xs={6}>

        </Grid>
        <Grid xs={4}>
        <ToDoCard/>
        </Grid>
        <Grid xs={12}>
          <div className="progress_container">
            <ProgressCards  lesson_ids={lesson_ids}/>
          </div>
        </Grid>
      </Grid>
    );
  }
}

  
 
export default DefaultProgressDisplay;

//
