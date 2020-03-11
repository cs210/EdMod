import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCommentIcon from '@material-ui/icons/AddComment';

import ReactMinimalPieChart from 'react-minimal-pie-chart';

import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AccessAlarmsOutlinedIcon from '@material-ui/icons/AccessAlarmsOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
  CircularProgress,
  ListItemAvatar,
  Avatar,
  Badge,
  ListItemSecondaryAction
}
from '@material-ui/core';

function GraphTab(i){
  var sampleGraph = [80, 25];

  return(
    <Grid item xs direction="row" container spacing={2} justify="space-evenly">
    <Grid item xs={6} align="center">
            <CircularProgress variant="static" value={sampleGraph[i]} size={75} thickness={10}/>

            </Grid>
            <Grid item xs={6}>
            
            <Typography variant="body2" noWrap>
                  Lesson text !!!
            </Typography>
      </Grid>
    </Grid>
  );
}

function StudentTab(i){
  var studenttab = (   

      <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Badge badgeContent=" " color="secondary" variant="dot" overlap="circle" anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}>
          <Badge badgeContent={
            <Tooltip title={"question!"} placement="right" arrow>
            <ContactSupportIcon fontSize='small'/>
            </Tooltip>
          } overlap="circle" 
          anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
          <Avatar> I </Avatar>
          </Badge>
          </Badge>
        
        </ListItemAvatar>
        
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Isaiah B.
              </Typography>
              
              <Typography variant="body2"
                color="gray">
              {"How do we know what a chatbot is thinking?"}
              </Typography>
              <ListItemSecondaryAction style={{marginLeft:15}}>
            
              <IconButton edge="end" aria-label="comments" onClick={()=>this.handleShowThread(i)} >
                <MoreVertIcon style={{width:15, height:15}}/>
              </IconButton>
            
            </ListItemSecondaryAction>
            </React.Fragment>
          }
        />
         
      </ListItem>
      
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
         <Badge badgeContent={
            <Tooltip title={"feeling good about sprint!"} placement="right" arrow>
            <SentimentVerySatisfiedIcon fontSize='small'/>
            </Tooltip>
          } overlap="circle" 
          anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
          <Avatar> S </Avatar>
          </Badge>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Stephanie
              </Typography>
              <Typography variant="body2"
                color="gray">
              {"The lesson was great! I loved the new material and it was so fun. I learned alot about..."}
              </Typography>
              <ListItemSecondaryAction style={{marginLeft:15}}>
            
              <IconButton edge="end" aria-label="comments" onClick={()=>this.handleShowThread(i)} >
                <MoreVertIcon style={{width:15, height:15}}/>
              </IconButton>
            
            </ListItemSecondaryAction>
            </React.Fragment>

          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
         <Badge badgeContent={
            <Tooltip title={"feeling good about sprint!"} placement="right" arrow>
            <SentimentVerySatisfiedIcon fontSize='small'/>
            </Tooltip>
          } overlap="circle" 
          anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
          <Avatar> A </Avatar>
          </Badge>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Austin
              </Typography>
              <Typography variant="body2"
                color="gray">
              {"So fun!"}

              </Typography>
              <ListItemSecondaryAction style={{marginLeft:15}}>
            
              <IconButton edge="end" aria-label="comments" onClick={()=>this.handleShowThread(i)} >
                <MoreVertIcon style={{width:15, height:15}}/>
              </IconButton>
            
            </ListItemSecondaryAction>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );

  if(i===0){
    return(studenttab);
  }
  return(<div/>)
}

function LessonTab(){
  return(
            <Grid item xs={12} container spacing={0} justify="space-between">
            <Grid item xs={6}>
            <Typography variant="body2" noWrap>
                  Tab 3
            </Typography>
              </Grid>
            <Grid item xs={6}>
            <Typography variant="body2" noWrap>
                  Tab 3
            </Typography>
            </Grid>
            </Grid>
  );
}

export default function ProgressTab(lesson, tab_id) {
  if(tab_id===0){
    return (GraphTab(lesson));
  }
  if(tab_id===1){
    return (StudentTab(lesson));
  }
  if(tab_id===2){
    return (LessonTab());
  }
}