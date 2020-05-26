import React, { useState, useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import QuestionCard from './QA_TextCard.js'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import QA_AnswerCards from './QA_AnswerCards.js'
import firebase from '../../../config/firebase.js'

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


// TODO: ANSWER REFRESH PROBLEM: CLEANUP here (combine q_id and setQuestion -> props)
const submitComment = (q_id, new_comment, setComment, setQuestion, question) => {

  if (new_comment != "") {
    console.log("I am here adding a new new comment", new_comment);

    firebase.firestore()
    .collection("questions")
    .doc(q_id)
    .collection("comments")
    .add({
      comments:[
      {author: "John C.",
      text: new_comment
      }
      ],
      accepted: false,
    }).then((docRef) => {
            window.location.reload(false);
          });



    setComment("");
  }
  // TODO: make comment reset
};

const QADisplay = (props) => {
  const default_question = {data:{title:"", author:"", text:"", tags:[], attachments:[], solved: false}, comments: []}
  const [answerInput, setAnswerInput] = useState('')
  const [q_id, setq_id] = useState('')
  const [question, setQuestion] = useState(default_question)
  useEffect(() => {
    if (q_id != props.q_id ){
      setq_id(props.q_id)
        firebase
          .firestore()
          .collection("questions")
          .doc(props.q_id)
          .get()
          .then((docRef) => {
            setQuestion(docRef.data())
          })
          .catch((error) => { })
      }
  });

  return (
    <div className = "qa_container" style = {{backgroundColor: '#f5f6fa', height: '100%', minHeight: '100%'}} >
    <QuestionCard question={question} setQuestion={setQuestion} q_id={q_id} submitComment={submitComment}/>
      <QA_AnswerCards q_id={q_id} q={question}/>
    </div>
      // <div className="qa_container">
      //   <QuestionCard question={question} setQuestion={setQuestion} q_id={q_id} submitComment={submitComment}/>
      //   <QA_AnswerCards q_id={q_id} q={question}/>
      // </div>
    );
  };

export default QADisplay;

//
