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
const submitComment = (q_id, new_comment, setComment, setQuestion) => {

  if (new_comment != "") {
    console.log("I am here adding a new new comment", new_comment);

    firebase
      .firestore()
      .collection("questions")
      .doc(q_id)
      .update({
        threads: firebase.firestore.FieldValue.arrayUnion({
          accepted: false,
          text: [{ author: "jennifer", comment: new_comment }],
        }),
      });

      console.log("I am now retreiving the data again")
      firebase
        .firestore()
        .collection("questions")
        .doc(q_id)
        .get().then(function(doc) {
            if (doc.exists) {
                setQuestion(doc.data())
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    setComment("");
  }
  // TODO: make comment reset
};

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
        <QuestionCard question={question} setQuestion={setQuestion} q_id={q_id} submitComment={submitComment}/>
        <QA_AnswerCards answers={question.threads} q_id={q_id}/>
      </div>
    );
  };

export default QADisplay;

//
