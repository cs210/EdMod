import React, { Component } from "react";
import { Link as RouterLink } from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ImgMediaCard from './QA_ImgCard.js'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ReplyIconOutlined from '@material-ui/icons/ReplyOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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

export default function QuestionCard(question) {
  var tags = ['tag1', 'tag2']
  var req = ['include photo', 'include screenshot']
  var user = "Isaiah Bush"

  return (
    <div >
    <Paper style={{padding: 10,
    margin: 10}}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h4">
                {question[0]}
                </Typography>
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
            return(<Button variant="outlined" color="primary">
            <Typography variant="caption">
        <font color="grey">{tag}</font>
      </Typography>
            </Button>
            )
          })}
        </Grid>
        <Grid key='question_user' item>
          <Typography variant="body2">
            Asked by {user}
          </Typography>
        </Grid>
      </Grid>
              </Grid>
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
          </Grid>
        </Grid>
        <Divider style={{margin: 30}}/>
         <Paper style={{padding: 10,
          margin: 10}}>
        <FormControl fullWidth multiLine={true} rows={5} rowsMax={15} variant='outlined'>
          <InputLabel>Comment</InputLabel>
          <OutlinedInput
          fullWidth multiLine={true} rows={5} rowsMax={15}
            id="comment"
            //value={values.password}
            //onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  //onClick={handleClickShowPassword}
                  //onMouseDown={handleMouseDownPassword} 
                  //TODO: actually capture text
                  color="primary"
                >
                <ReplyIconOutlined/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Paper>
      </Paper>

      </div>
    );
}