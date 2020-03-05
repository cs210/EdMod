import React, { Component } from "react";
import { Link as RouterLink } from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
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

export default function TextCard(question) {
  var tags = ['tag1', 'tag2']
  var req = ['include photo', 'include screenshot']
  var user = "Isaiah Bush"

  return (
    <Paper style={{padding: 10,
    margin: 10}}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h5">
                {question[0]}
                </Typography>
                <Typography variant="body1">
        <font color="grey">{question[1]}</font>
      </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
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
      </Paper>
      
    );
}