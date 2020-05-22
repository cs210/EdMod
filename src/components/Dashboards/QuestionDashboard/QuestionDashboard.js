import React, { useState, useEffect } from "react";
import QASidebar from './QA_Sidebar.js';
import QADisplay from './QA_Display.js';
import QANewPost from './QA_NewPost.js'
import {Paper, Grid} from '@material-ui/core';
import mockData from './mockData.js'
import firebase from '../../../config/firebase.js'
import ReactGA from 'react-ga';

function GetQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('questions')
      .orderBy('date')
      .onSnapshot((snapshot) => {
        const newQuestions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setQuestions(newQuestions.reverse())
      })
  }, [])
  console.log("questions", questions)

  return questions
}

const QuestionDashboard = (props) => {
  const [filterText, setFilterText] = useState('')
  const [q_id, setq_id] = useState(props.match.params.q_id)
  const [newPost, setNewPost] = useState(false)

  ReactGA.pageview("QA pageview");

  useEffect(() => {
    if (q_id != props.match.params.q_id) {
      setq_id(props.match.params.q_id)
    };
  });

  const questionList = GetQuestions();

  if (!newPost) {
  return (
      <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="stretch"
      >
      <Grid item sm={4}  alignItems="stretch">
          <QASidebar
            filterText={filterText}
            setFilterChange={setFilterText}
            questionList={questionList}
            newPost={newPost}
            setNewPost={setNewPost}
          />
      </Grid>
      <Grid item sm={8} alignItems="stretch">
        <QADisplay q_id={q_id} newPost={newPost}/>
      </Grid>
    </Grid>

  );
} else {
  return (
      <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="stretch"
      >
      <Grid item sm={4}  alignItems="stretch">
          <QASidebar
            filterText={filterText}
            setFilterChange={setFilterText}
            questionList={questionList}
            newPost={newPost}
            setNewPost={setNewPost}
          />
      </Grid>
      <Grid item sm={8} alignItems="stretch">
        <QANewPost setNewPost={setNewPost} q_id={q_id} />
      </Grid>
    </Grid>

  );
}
}

export default QuestionDashboard;
