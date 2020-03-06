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
  ButtonGroup
}
from '@material-ui/core';

//TODO: refactor to combine answer and question cards

export function AnswerCards(answersList) {
  var user = "Isaiah Bush";
   var answers = [];
    var answer;
    for (var i in answersList) {
        answer = answersList[i];
        console.log(i)
        answers[i] = (
          <Paper style={{padding: 15,
    margin: 10}}>          
          <Grid container direction="column" spacing={1}>
          <Grid item container spacing={1} justify="space-between">
            <Grid item xs={2} >
              <Typography variant="caption">
                  <font color="grey">by stephanie</font>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                  {answer[0]}
                </Typography>
            </Grid>
            <Grid item xs={12}>
              <Chip
              clickable
              style={{padding: 3}}
              size="small"
        icon={<ChatBubbleIcon/>}
        label="Reply"
        variant="outlined" 
      />
            </Grid>
          </Grid>
          </Grid>
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
          <Typography variant="body2">
            <font color="grey">Asked by {user}</font>
          </Typography>
        </Grid>
      </Grid>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
        <Divider style={{margin: 15}}/>
         <Paper style={{padding: 10,
          margin: 10}}>
        <Grid container direction="row" spacing={2} alignItems="center">
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