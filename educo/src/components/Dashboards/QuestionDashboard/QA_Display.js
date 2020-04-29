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


const QADisplay = (props) => {
  const default_question = {data:{title:"", author:"", text:"", tags:[], attachments:[], solved: false}, threads: []}
  const [answerInput, setAnswerInput] = useState('')
  const [q_id, setq_id] = useState('')
  const [question, setQuestion] = useState(default_question)
  useEffect(() => {
    if (q_id != props.q_id) {
      setq_id(props.q_id)
        firebase
          .firestore()
          .collection("questions")
          .doc(props.q_id)
          .get()
          .then((docRef) => {
            console.log("here", docRef.data())
            setQuestion(docRef.data())
          })
          .catch((error) => { })
      }
  });

  // const question = firebase.firestore.collection("question").doc(q_id).get()

  return (
      <div className="qa_container">

        <QuestionCard question={question} q_id={q_id}/>
        <QA_AnswerCards answers={question.threads} q_id={q_id}/>
      </div>
    );
  };

export default QADisplay;

//
