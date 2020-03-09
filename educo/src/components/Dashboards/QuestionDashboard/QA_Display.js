import React, { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
import QuestionCard from './QA_TextCard.js'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import QA_AnswerCards from './QA_AnswerCards.js'

import mockData from './mockData.js'
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
      q_id: this.props.q_id,
      q_info: mockData(this.props.q_id)
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(inputText) {
    this.setState({
      answerInput: inputText
    });
  }

getQuestionInfo(){
  return mockData(this.state.q_id);
}

displayTextCard() {
  //var questionInfo = this.getQuestionInfo()
  return QuestionCard(this.state.q_info); //TODO: question id should link to answer_ids, so TextCard should only take 1 parameter

}
/*
displayAnswerCard(){
  //TODO: figure out Typography tag overflow 
  var answers = [["Have you tried looking at the FAQs?", 'yea not sure, I tried that!'], ["hmmmmmmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmm idk haha [overflow answer ex]"]] //Answers are arrays of arrays
  return AnswerCards(answers); 
}
*/
  render() {
    var answers = [["Have you tried looking at the FAQs?", 'yea not sure, I tried that!', 'hmmm, i wonder whats wrong', 'me too'], ["hmmmmmmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmm idk haha [overflow answer ex]", "woah thats long!", ":))"]] //Answers are arrays of arrays
    return (
      <div className="qa_container">
        {this.displayTextCard()}
        <QA_AnswerCards  q_id={this.state.q_id} answers={answers}/>
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
