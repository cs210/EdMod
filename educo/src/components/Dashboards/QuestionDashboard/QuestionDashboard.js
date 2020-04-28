import React, { useState, useEffect } from "react";
import QASidebar from './QA_Sidebar.js';
import QADisplay from './QA_Display.js';
import {Paper, Grid} from '@material-ui/core';
import mockData from './mockData.js'
import firebase from '../../../config/firebase.js'

function GetQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('questions')
      .onSnapshot((snapshot) => {
        const newQuestions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setQuestions(newQuestions)
      })
  }, [])


  return questions
}

const QuestionDashboard = (props) => {
  const [filterText, setFilterText] = useState('')
  const [q_id, setq_id] = useState(props.match.params.q_id)

  useEffect(() => {
    if (q_id != props.match.params.q_id) {
      setq_id(props.match.param.q_id)
    };
  });

  const questionList = GetQuestions();

  return (
      <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="stretch"
      >
      <Grid item sm={3}  alignItems="stretch">
          <QASidebar
            filterText={filterText}
            setFilterChange={setFilterText}
            questionList={questionList}
          />
      </Grid>
      <Grid item sm={9} alignItems="stretch">
        <QADisplay q_id={q_id} questionList={questionList}/>
      </Grid>
    </Grid>

  );
}

export default QuestionDashboard;


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filterText: '',
  //     q_id: this.props.match.params.q_id,
  //   };
  //   this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  // }
  //
  // handleFilterTextChange(filterText) {
  //   this.setState({
  //     filterText: filterText
  //   });
  // }


// getMockList(){
//     var questions = [];
//     for(var i=0; i<3; i++){
//       var info = mockData(i);
//       var text = info.text;
//       if(text.length > 75){
//         text = text.substring(0,75) + "...";
//       }
//       questions.push([i.toString(), info.title, text])
//     }
//     return questions;
//   }


  // render() {
  //   var list = this.getMockList();
  //   console.log(this.state)
  //   return (
  //       <Grid
  //       container
  //       direction="row"
  //       justify="space-between"
  //       alignItems="stretch"
  //       >
  //       <Grid item sm={3}  alignItems="stretch">
  //           <QASidebar
  //             filterText={this.state.filterText}
  //             onFilterTextChange={this.handleFilterTextChange}
  //             questionList={list}
  //           />
  //       </Grid>
  //       <Grid item sm={9} alignItems="stretch">
  //         <QADisplay q_id={this.state.q_id}/>
  //       </Grid>
  //     </Grid>
  //
  //   );
  // }

  // componentDidMount() {
  //   this.setState({q_id: this.props.match.params.q_id});
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.match.params.q_id !== prevState.q_id) {
  //     this.setState({q_id: this.props.match.params.q_id});
  //   }
  // }
  //


/*

*/
