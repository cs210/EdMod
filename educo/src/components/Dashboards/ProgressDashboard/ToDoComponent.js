import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCommentIcon from '@material-ui/icons/AddComment';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import ReactMinimalPieChart from 'react-minimal-pie-chart';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AccessAlarmsOutlinedIcon from '@material-ui/icons/AccessAlarmsOutlined';
import mockData from './mockData.js'


import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
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
  CircularProgress,
  ListItemAvatar,
  Avatar,
  Badge,
  Checkbox,
  Collapse,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
}
from '@material-ui/core';

class ToDoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerInput: [],
      checked: Array(this.getTasks().length).fill(false),
      threadShown: -1,
    };
  }

getTasks(){
  return(mockData());
}

handleShowThread(index){
  if(index===this.state.threadShown){
    this.setState({threadShown:-1})
  }
  else{
    this.setState({threadShown:index})
  }
}

handleToggle(index){
  var temp_checked = this.state.checked;
  temp_checked[index] = !temp_checked[index];
  this.setState({checked:temp_checked})
}

makeThread(thread, i){
  var threadDisplay = [];
  var item;
  for (let i=0; i < thread.length; i++) {
        item = thread[i];
        threadDisplay[i] = (
          <ListItem key={i} dense disableRipple divider>
            <ListItemAvatar style={{width:30, height:30}}>
              <Avatar alt={item.author} src={item.author_img} style={{width:25, height:25}}/>
            </ListItemAvatar>
            <Typography variant="body2" style={{fontSize:12}}>
              {item.text}
            </Typography>
          </ListItem>
      )
  }
              
  return(
    <Collapse in={this.state.threadShown===i} timeout="auto" unmountOnExit>
        <List component="div" disablePadding style={{paddingLeft:20}}>
          {threadDisplay}
        <ListItem>
          <TextField
          label="Note"
          id="outlined-size-small"
          size="small"
          multiline
          fullWidth
        />
        <IconButton
                  aria-label="submit comment"
                  //onClick={handleClickShowPassword}
                  //onMouseDown={handleMouseDownPassword} 
                  //TODO: actually capture text
                  //TODO: More complex text editor
                  color="primary"
                >
                <ReplyOutlinedIcon/>
                </IconButton>
        </ListItem>
        </List>
    </Collapse>
  );

}

ToDoList() {
    var tasks = this.getTasks();
    var task
    var taskList = [];
    for (let i=0; i < tasks.length; i++) {
        task = tasks[i];
        taskList[i] = (
        <div>
          <ListItem key={i} dense button disableRipple>
            <ListItemIcon>
              
              <Checkbox
                edge="start"
                checked={this.state.checked[i] !== false}
                tabIndex={-1}
                disableRipple
                onClick={() => this.handleToggle(i)} disableRipple
              />
              
            </ListItemIcon>
            <ListItemText primary={task.title} secondary={"by " + task.deadline} />
            <ListItemSecondaryAction>
            
              <IconButton edge="end" aria-label="comments" onClick={()=>this.handleShowThread(i)} >
                {task.updated ? <Badge color="secondary" variant="dot">
                  <AddCommentIcon style={{width:15, height:15}}/>
                </Badge> :
                <AddCommentIcon style={{width:15, height:15}}/>
              }
              </IconButton>
            
            </ListItemSecondaryAction>
          </ListItem>
          {this.makeThread(task.thread, i)}
        </div>
        );
    }
    return taskList;
  }

  render(){
    return (
      <Paper style={{padding: 10, 
    margin: 10, overflow: "scroll", minHeight:250, maxHeight:250}}>
        <Typography variant="h5">
          Upcoming
        </Typography>
        <Divider/>
        <List>
        {this.ToDoList()}
        </List>
      </Paper>
    );
  }



}

export default ToDoCard

//<IconButton edge="end" aria-label="checkbox" onClick={() => this.handleToggle(i)} disableRipple>
