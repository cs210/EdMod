import React, { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
import TextCard from './QA_TextCard.js'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

class QADisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerInput: '',
      q_id: "Scratch setup"
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(inputText) {
    this.setState({
      answerInput: inputText
    });
  }

displayTextCard() {
  var question = [this.state.q_id, 'how do i set up scratch - help!!!!'];
  return TextCard(question);

}

  render() {
    return (
      <div className="qa_container">
        {this.displayTextCard()}
      </div>
    );
  }
}

export default QADisplay;
