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


function AuthorPanel(author){
  //TODO: get author info

  //sample badge rendering
  var BadgeSample5 = 'https://www.starbreeder.org/images/5start-img.png'
  var EFTWBadgeSample = 'https://engineerfortheweek.fb.com/wp-content/uploads/2017/12/cropped-eftw-favicon.png'
  var sprintingBadge = 'https://static.thenounproject.com/png/168818-200.png'
  var badge;
  if(author === 'austin'){
    badge = (
    <Tooltip title="EFTW Top Contributor" placement="right" arrow>
        <img src={EFTWBadgeSample} width='15'/>
    </Tooltip>
    )
  }
  else if (author==='Isaiah B.'){
    badge = (
      <Tooltip title={"Currently sprinting! Spring 2020"} placement="right" arrow>
        <img src={sprintingBadge} width='20'/>
     </Tooltip>
    )
  }
  else{
    badge = (
      <Tooltip title="Taught 5 EFTW sprints!" placement="right" arrow>
        <img src={BadgeSample5} width='20'/>
     </Tooltip>
    )
  }
  


  return(
    <div>
    <Typography variant="caption" style={{marginRight:5}}>
        <font color="grey">{author}</font>
    </Typography>
    {badge}
   
    </div>
  );
}

//TODO: refactor to combine answer and question cards
function SubAnswers(answersList){


  const handleClickShowComment = () => {
  };

  const handleMouseDownComment = event => {
    
  };

  var answers = [];
  var answer;
    for (var i=1; i < answersList.length; i++) {
        answer = answersList[i];
        answers[i] = (
          <Grid container direction="column" spacing={0} >
          <Divider style={{margin:10}}/>
          <Grid item container spacing={0} justify="space-between">
            <Grid item xs={1} >
              
            </Grid>
            <Grid item xs={3} >
              {AuthorPanel("stephanie")}
            </Grid>
            <Grid item xs={8}>
              
            </Grid>
            <Grid item xs={1}>
              
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2">
                  {answer}
              </Typography>
              <IconButton aria-label="comment" onClick={handleClickShowComment}
                  onMouseDown={handleMouseDownComment}>
              <ChatBubbleIcon fontSize="small" style={{width:15, height:15}} color='primary'/>
            </IconButton>
            </Grid>
          </Grid>
          </Grid>
        )
    } 
    return answers;
}

export function AnswerCards(answersList) {
  var user = "austin";
   var answers = [];
    var answer;
    for (var i in answersList) {
        answer = answersList[i];
        answers[i] = (
          <Paper style={{padding: 15,
    margin: 10, overflow: "scroll"}}>          
          <Grid container direction="column" spacing={1}>
          <Grid item container spacing={1} justify="space-between">
            <Grid item xs={2}>
              {AuthorPanel(user)}
            </Grid>
            <Grid item xs={3}>
            </Grid>
            
            <Grid item xs={7}>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                  {answer[0]}
                </Typography>
            </Grid>
            <Grid item xs={12}>
            <Button color="primary"  startIcon={<ChatBubbleIcon/>}  size="small">Reply</Button>
            </Grid>
          </Grid>
          </Grid>
          {SubAnswers(answer)}
          </Paper>
        );
    }
    return answers;
  }




export default function QuestionCard(question) {
  var tags = ['tag1', 'tag2']
  var req = ['include photo', 'include screenshot'] // TODO: implement
  var user = "Isaiah Bush"


  return (
    <div >
    <Paper style={{padding: 25,
    margin: 10}}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs container direction="row" spacing={2}>
                <Grid item xs>
                  <Typography variant="h4">
                  {question[0]}
                  </Typography>
                </Grid>
                <Grid item>
              <IconButton aria-label="notif" size="small">
          <NotificationImportantIcon fontSize="inherit" />
        </IconButton>
              
            </Grid>
            <Grid item>
              <IconButton aria-label="upvote" size="small">
          <ThumbUpAltIcon fontSize="inherit" />
        </IconButton>
              
            </Grid>
                <br/>
                <Typography variant="body1">
        {question[1]}
      </Typography>
      <br/>
                {ImgMediaCard()}
              </Grid>
              <Grid item>
                <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-end">
        <Grid key='question_tags' item>
          {tags.map((tag)=> {
            return(
              <Chip size="small"
            label={tag}
          />
        );
      })}
        </Grid>
        <Grid key='question_user' item>
          {AuthorPanel("Isaiah B.")}
        </Grid>
      </Grid>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
        <Divider style={{margin: 15}}/>
         <Paper style={{padding: 10,
          margin: 10}}>
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
        <IconButton aria-label="img_submit">
          <CropOriginalIcon fontSize="inherit" />
        </IconButton>
        </Grid>
        </Grid>
      </Paper>
      </Paper>
      </div>
    );
}