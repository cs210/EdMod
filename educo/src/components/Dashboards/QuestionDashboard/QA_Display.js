import React, { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
import QuestionCard, {AnswerCards} from './QA_TextCard.js'
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
      q_id: this.props.q_id
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(inputText) {
    this.setState({
      answerInput: inputText
    });
  }

displayTextCard() {
  var question = [this.state.q_id, 'I’m working on the social impact game, and I’m having trouble setting up Scratch on my computer. I followed the tutorial but I can’t seem to get it working. It keeps freezing past the login screen. I tried resetting my computer, but that does not help me. Can someone help?'];
  var answers = [["hmmmmmmmmmmmmm idk haha"], ["Have you tried looking at the FAQs?", 'yea not sure, I tried that!']] //Answers are arrays of arrays
  return QuestionCard(question); //TODO: question id should link to answer_ids, so TextCard should only take 1 parameter

}
displayAnswerCard(){
  var answers = [["hmmmmmmmmmmmmm idk haha"], ["Have you tried looking at the FAQs?", 'yea not sure, I tried that!']] //Answers are arrays of arrays
  return AnswerCards(answers); 
}

  render() {
    return (
      <div className="qa_container">
        {this.displayTextCard()}
        {this.displayAnswerCard()}
      </div>
    );
  }

  componentDidMount() {
    this.setState({q_id: this.props.q_id});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.q_id !== prevState.q_id) {
    this.setState({q_id: this.props.q_id});
    }
  } 
}

  

export default QADisplay;
