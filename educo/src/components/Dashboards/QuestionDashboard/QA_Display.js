import React, { useState } from "react";
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

const QADisplay = (props) => {
  const [answerInput, setAnswerInput] = useState('')
  const [q_id, setq_id] = useState(props.q_id)

  // need to search through questionList here with the current selected q_id
  var answers = props.questionList;
  return (
    <div className="qa_container">
    Hello
    </div>
  )
  // return (
  //     <div className="qa_container">
  //     Hello
  //       {this.displayTextCard()}
  //       <QA_AnswerCards  q_id={this.state.q_id} answers={answers}/>
  //     </div>
  //   );
  };



  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     answerInput: '',
  //     q_id: this.props.q_id,
  //   };
  //   this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  // }
  //
  // handleFilterTextChange(inputText) {
  //   this.setState({
  //     answerInput: inputText
  //   });
  // }
//
// getQuestionInfo(){
//   var info = mockData(parseInt(this.state.q_id))
//   return info;
// }
//
// getAnswerInfo(){
//   var info = mockData(parseInt(this.state.q_id)).threads
//   return info;
// }
//
//
// displayTextCard() {
//   var questionInfo = this.getQuestionInfo()
//   return QuestionCard(questionInfo); //TODO: question id should link to answer_ids, so TextCard should only take 1 parameter
//
// }

  // componentDidMount() {
  //   this.setState({q_id: this.props.q_id});
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.q_id !== prevState.q_id) {
  //     this.setState({q_id: this.props.q_id});
  //   }
  // }
// }



export default QADisplay;

//
