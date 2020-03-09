import React, { Component, useEffect, useMemo, useState }from "react";
import { Link as RouterLink } from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ImgMediaCard from './QA_ImgCard.js'
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
import AuthorPanel from './AuthorPanel.js'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import BeenhereIcon from '@material-ui/icons/Beenhere';

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
  Tooltip
}
from '@material-ui/core';

class QA_AnswerCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers:this.props.answers,
      answerInput: [],
      q_id: this.props.q_id,
      answer_visible:Array(this.props.answers.length).fill(0)
    };
  }

  handleShowSubAnswerText(i){
    var answer_visible = this.state.answer_visible
    answer_visible[i] = 1
    this.setState({answer_visible:answer_visible});
  }

  TextInputVisible(i){
    return(
       <Grid container direction="row" spacing={0} alignItems="center">
        <Grid item xs>
        <FormControl fullWidth variant='outlined'>
          <InputLabel>Comment</InputLabel>
          <OutlinedInput
          fullWidth multiLine={true} rows={5} rowsMax={15} //TODO: figure out mulitLine textbox
            id="comment"
            //value={values.password}
            //onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
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
              </InputAdornment>
            }
          />
        </FormControl>
        </Grid>
        <Grid item xs={1}>
        <IconButton aria-label="img_submit" size="small"> 
          <CropOriginalIcon fontSize="inherit"/>
        </IconButton>
        </Grid>
      </Grid>
      )
  }

  SubAnswers(answersList, a_id){
    var answers = [];
    var answer;
    for (var i=1; i < answersList.length; i++) {
        answer = answersList[i];
        answers[i] = (
          <Grid container direction="column" spacing={0} >
          <Grid item container spacing={0} justify="space-between">
            <Grid item xs={1} >
              
            </Grid>
            <Grid item xs={11} >
              <Divider style={{marginTop:10, marginBottom:10}}/>
              {AuthorPanel("stephanie")}
            </Grid>
            
            <Grid item xs={1}>
              
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2">
                  {answer}
              </Typography>
            <IconButton aria-label={"comment_"+i} id={"comment_"+i} onClick={()=> {this.handleShowSubAnswerText(a_id)}}>
              <ChatBubbleIcon fontSize="small" style={{width:15, height:15}}/>
            </IconButton>
            <IconButton aria-label="upvote" size="small">
              <ThumbUpAltIcon fontSize="inherit" />
            </IconButton>
            </Grid>
          </Grid>
          </Grid>
        )
    } 
    return answers;
}

AnswerCard(answersList) {
  var user = "austin";
   var answers = [];
    var answer;
    console.log(this.state)
    
    for (let i=0; i < answersList.length; i++) {
        console.log(i)
        answer = answersList[i];
        answers[i] = (
          <Paper style={{padding: 15,
    margin: 10, overflow: "scroll"}}>          
          <Grid container direction="column" spacing={1}>
          <Grid item container spacing={1} justify="space-between">
            <Grid item xs={2}>
              {AuthorPanel(user)}
            </Grid>
            <Grid item xs={9}>
            </Grid>
            


            <Grid item xs={1} align="left" >
              <Tooltip title="Accepted answer" placement="right" arrow>
        <BeenhereIcon style={{color:'green'}} fontSize='small'/>
     </Tooltip>


              
           </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                  {answer[0]}
                </Typography>
            </Grid>
            <Grid item xs={12}>
            <Button color="primary"  startIcon={<ChatBubbleIcon/>}  size="small" onClick={()=> {this.handleShowSubAnswerText(i)}}>Reply</Button>
            </Grid>
          </Grid>
          </Grid>
          {this.SubAnswers(answer, i)}
          {this.state.answer_visible[i]===1 ? this.TextInputVisible(i) : <div/> }
          </Paper>
        );
    }
    return answers;
  }

  render(){
    return (this.AnswerCard(this.state.answers));
  }
}

export default QA_AnswerCards
