import React, { Component } from "react";
import { Link as RouterLink } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Divider,
  Container,
  Button,
  Grid
}
from '@material-ui/core';

class QADisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerInput: '',
      questionId: '000113131310',
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(inputText) {
    this.setState({
      answerInput: inputText
    });
  }

  displayQuestion() {
    //sample q data
    var question = ['Help Scratch', 'how do i set up scratch - help!!!!'];
    var tags = ['tag1', 'tag2']
    var req = ['include photo', 'include screenshot']
    var user = "Isaiah Bush"


    var display = (
      <Paper elevation={2}>
      <Typography variant="h3">
        {question[0]}
      </Typography>
      <Typography variant="body1">
        <font color="grey">{question[1]}</font>
      </Typography>
      <Divider />
      <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      >
        <Grid key='question_tags' item>
          {tags.map((tag)=> {
            return(<Button variant="outlined" color="primary">
            {tag}
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
      </Paper>
    )
    return display;
  }


  render() {
    return (
      <div className="qa container">
        {this.displayQuestion()}
      </div>
    );
  }
}

export default QADisplay;
