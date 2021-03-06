import React, { Component, useEffect, useMemo, useState }from "react";
import { Link as RouterLink } from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ImgMediaCard from './QA_ImgCard.js'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chip from '@material-ui/core/Chip';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import AuthorPanel from './AuthorPanel.js'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import firebase from '../../../config/firebase.js';

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
  IconButton,
  ButtonGroup,
  Box,
  Tooltip
}
from '@material-ui/core';

class QA_AnswerCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [], // this.getComments(this.props.q_id),
      // answerInput: Array(this.props.answers.length).fill(''),
      q_id: this.props.q_id,
      answer_visible: []
    };
  }

  getAnswers(q_id) {
    console.log("QID,", q_id)
    firebase
      .firestore()
      .collection("questions")
      .doc(q_id)
      .collection("comments")
      .get()
      .then((querySnapshot) => {
      const tempDoc = [];
      const ansToId = {};
      var num = 0;
      querySnapshot.forEach((doc) => {
         tempDoc.push({ id: doc.id, ...doc.data() });
          ansToId[num] = doc.id;
          num = num+1;
      });
      console.log(ansToId);
      this.setState({answers: tempDoc, answer_visible: Array(tempDoc.length).fill(0), ansToId: ansToId, answerInput: Array(tempDoc.length).fill(''), answerAuthor: Array(tempDoc.length).fill((firebase.auth().currentUser) ? firebase.auth().currentUser.displayName.split(" ")[0] + " " + firebase.auth().currentUser.displayName.split(" ").slice(-1)[0][0] + "." : "anonymous")})})
  }

handleChangeAuthor(event, i) {
    var answerAuthor = this.state.answerAuthor
    answerAuthor[i] = event.target.value
    this.setState({answerAuthor:answerAuthor})
  }

  handleChange(event, i) {
    var answerInput = this.state.answerInput
    answerInput[i] = event.target.value
    this.setState({answerInput:answerInput})
  }

  handleSubmit(event, i){
    var answer_array = {author: this.state.answerAuthor[i], text: this.state.answerInput[i]}
    console.log(this.state.q_id)
    if (answer_array.comment != ''){
      var firebaseRef = firebase
          .firestore()
          .collection("questions")
          .doc(this.props.q_id)
          .collection("comments")
          .doc(this.state.ansToId[i])
          .update({"comments": firebase.firestore.FieldValue.arrayUnion(answer_array)
        }).then((docRef) => {
            window.location.reload(false);
          });
      }
    }

  handleShowSubAnswerText(i){
    var answer_visible = this.state.answer_visible
    answer_visible[i] = 1
    this.setState({answer_visible:answer_visible});
  }

  TextInputVisible(i){
    return(
       <Grid container direction="row" spacing={0} alignItems="center">
        <Grid item xs>
        <TextField
          label="Display Name"
          id="outlined-size-small"
          defaultValue={(firebase.auth().currentUser) ? firebase.auth().currentUser.displayName.split(" ")[0] + " " + firebase.auth().currentUser.displayName.split(" ").slice(-1)[0][0] + "." : "anonymous"}
          size="small"
          onChange={(e) => this.handleChangeAuthor(e, i)}
        />
        <FormControl fullWidth variant='outlined'>
          <InputLabel>Comment</InputLabel>
          <OutlinedInput
          fullWidth multiLine={true} rows={5} rowsMax={15} //TODO: figure out mulitLine textbox
            id="comment"
            //value={values.password}
            onChange={(e) => this.handleChange(e, i)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="submit comment"
                  onClick={(e) => this.handleSubmit(e, i)}
                  //onMouseDown={handleMouseDownPassword}
                  //TODO: actually capture text
                  //TODO: More complex text editor
                  color="primary"
                >
                <ReplyOutlinedIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Grid>
        <Grid item xs={1}>
        <IconButton aria-label="img_submit" size="small">
          <CropOriginalIcon fontSize="inherit"/>
        </IconButton>
        </Grid>
      </Grid>
      )
  }

  SubAnswers(answersList, a_id){
    var answers = [];
    var answer;
    for (var i=1; i < answersList.comments.length; i++) {
        answer = answersList.comments[i];
        answers[i] = (
          <Grid container direction="column" spacing={0} style={{padding: 15,
            margin: 5, marginBottom: 10, overflow: 'hidden', backgroundColor: '#f6f6f6'}} >
          <Grid item container spacing={0} justify="space-between">

            <Grid item xs={12} >
              {AuthorPanel(answer.author)}
            </Grid>


            <Grid item xs={12}>
              <Typography variant="body2">
                  {answer.text}
              </Typography>
            </Grid>
          </Grid>
          </Grid>
        )
    }
    return answers;
}

AnswerCard(answersList) {
    console.log("ANSWERLIST", answersList)
   var answers = [];
    var answer;

    for (let i=0; i < answersList.length; i++) {
        answer = answersList[i];
        answers[i] = (
          <Paper style={{padding: 15,
    margin: 10, overflow: "scroll"}}>
          <Grid container direction="column" spacing={1}>
            <Grid item container spacing={1} justify="space-between">
              <Grid item xs={2} >
                {AuthorPanel(answer.comments[0].author)}
              </Grid>
              <Grid item xs={9}>
              </Grid>



              <Grid item xs={1} align="left" >
                    {answer.accepted === true ? <Tooltip title="Accepted answer" placement="right" arrow>
                <BeenhereIcon style={{color:'green'}}/>
             </Tooltip> : <div/> }
           </Grid>

            <Grid item xs={12}>
              <Typography variant="body2">
                  {answer.comments[0].text}
                </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button color="primary"  startIcon={<ChatBubbleIcon/>}  size="small" onClick={()=> {this.handleShowSubAnswerText(i)}}>Reply</Button>
            </Grid>
          </Grid>
          </Grid>

          {this.SubAnswers(answer, i)}
          {this.state.answer_visible[i]===1 ? this.TextInputVisible(i) : <div/> }
          </Paper>

        );
    }
    return answers;
  }

  render(){
    return (this.AnswerCard(this.state.answers));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.q_id !== prevState.q_id || this.props.q !== prevProps.q) {
      this.setState({q_id: this.props.q_id})
      console.log("getting answers")
      this.getAnswers(this.props.q_id)

      //this.setState({answersInput: Array(this.state.answers.length).fill('') });

    }
  }
}

export default QA_AnswerCards
