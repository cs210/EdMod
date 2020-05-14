import React, { Component, useEffect, useMemo, useState }from "react";
import { Link as RouterLink } from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chip from '@material-ui/core/Chip';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import BeenhereIcon from '@material-ui/icons/Beenhere';

import ReactMinimalPieChart from 'react-minimal-pie-chart';
import FormDialouge from './popupButton.js'
import ProgressTab from './progressTabs.js'

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListIcon from '@material-ui/icons/List';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SlideshowIcon from '@material-ui/icons/Slideshow';


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
  IconButton,
  ButtonGroup,
  Box,
  Tooltip,
  Tabs,
  Tab,
  Badge
}
from '@material-ui/core';

class UpcomingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerInput: [],
      tab_states: 0
    };
  }


  handleChange(tab){
    this.setState({tab_states:tab});
  };

TabPanel(lesson, index) {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={this.state.tab_states[lesson] !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {index}
    </Typography>
  );
}

UpcomingCard(lesson) {
    var card = (
          <Paper style={{padding: 10, 
    margin: 10, overflow: "scroll", minHeight:300, maxHeight:300}}>          
          <Grid container direction="column" spacing={1} justify="space-between" >
          <Grid item container spacing={1} justify="space-between" alignItems="center">
            <Grid item xs={10}>
            
        <Typography variant="h6" noWrap>
            {lesson}

        </Typography>
        </Grid>
         <Grid item xs={2}>
            
            <IconButton>
              <ArrowForwardIcon/>
            </IconButton>
            </Grid>
            <Grid item xs={12}>
            <div>



 <Tabs
    style={{marginBottom:20}}
    value={this.state.tab_states[i]-1}
    indicatorColor="primary"
    textColor="primary"
    centered
    fullWidth
  >


    <Tab icon={<SlideshowIcon/>} onClick={() => this.handleChange(1)}/>
    <Tab icon={<PeopleAltIcon/>} onClick={() => this.handleChange(2)}/>
    <Tab icon={<ListIcon/>} onClick={() => this.handleChange(3)}/>
  </Tabs>
</div>
            </Grid>
            {ProgressTab(i, this.state.tab_states[i]-1)}
            

           <Grid item xs={4}>
                  
            </Grid>
            <Grid item xs={8}>
              
            </Grid>
            <Grid item xs={12}>
            <FormDialouge/>
            </Grid>
            {this.TabPanel(i)}

          </Grid>
          </Grid>
          </Paper>
        );
    }
    return card;
  }

  render(){
    var pCard = this.ProgressCards(this.state.lesson_ids)
    return (
      <Grid container direction="row" spacing={1} style={{padding:30}}>
      <Grid item xs={12}>
        <Typography variant="h5">
          Upcoming Lesson
        </Typography>
        <Divider/>
      </Grid>
      {pCard}
      </Grid>
    );
  }

}

export default ProgressCards
