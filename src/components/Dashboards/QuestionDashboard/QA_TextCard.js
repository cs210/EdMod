import React, { Component, useEffect, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import ImgMediaCard from "./QA_ImgCard.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Chip from "@material-ui/core/Chip";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import AuthorPanel from "./AuthorPanel.js";
import firebase from "../../../config/firebase.js";
import "../../../styling/qa.css"
import moment from 'moment'

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
  Tooltip,
} from "@material-ui/core";

const formatDate = (question) => {
  var newDate = "";
  if (question.date !== undefined) {
    var date = question.date;
    var curr_date = new Date(date.seconds * 1000);
    var start = moment().startOf('day').toDate(); // set to 12:00 am today
    var end = moment().endOf('day').toDate(); // set to 23:59 pm today

    if (curr_date > start && curr_date < end) {
      newDate = "Updated 1 day ago"
    } else {
      var day = curr_date.getUTCDate();
      var year = curr_date.getUTCFullYear();
      newDate = "Updated " + day +  " days ago";
    }
  }
  return newDate;
}

const increment = firebase.firestore.FieldValue.increment(1);

const submitLike = (q_id) => {
  console.log("qid rn when liking,", q_id)
  var firebaseRef = firebase
      .firestore()
      .collection("questions")
      .doc(q_id)
      .update({"likes": increment })
      .then((docRef) => {
        window.location.reload(false);
  })

};




const QuestionCard = (props) => {
  const [commentAuthor, setCommentAuther] = useState("")
  const [comment, setComment] = useState("");
  var title = props.question.data.title;
  var q_body = props.question.data.text;
  var tags = props.question.data.tags;
  var attachments = props.question.attachments;
  var author = props.question.data.author;
  var answers = props.question.comments;
  var likes = props.question.likes;
  var formattedDate = formatDate(props.question);

  const questionBody = {
    padding: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    boxSizing: 'border-box',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  };

  const questionBottomBar = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 25,
    height: 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    boxSizing: 'border-box',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    border: 'None',
    backgroundColor: '#f6f6f6',
  };

  return (
    <div className = "question_card">
      <Paper style={questionBody}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs container direction="row" spacing={2}>
                <Grid item xs>
                  <Typography variant="h3">{title}</Typography>
                </Grid>


                </Grid>

                <Grid item>
                  <Typography variant="body1">{q_body}</Typography>
                  {ImgMediaCard(attachments)}
                </Grid>

              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-end"
                >
                  <Grid key="question_tags" item>
                    {tags.map((tag) => {
                      return <Chip size="small" label={tag} color='primary' style={{fontWeight: 525, color: '#3f51b5', backgroundColor: '#b3d3fc', marginRight: 10, borderRadius: 7}} />;
                    })}
                  </Grid>
                  <Grid key="question_user" item>
                    {AuthorPanel(author)}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider style={{ margin: 20 }} />
        <Paper style={{ padding: 10 }}>
          <Grid container direction="row" spacing={0} alignItems="center">
            <Grid item xs>
            { (comment==="") ? (<div/>) :
              (<TextField


          label="Display Name"
          id="outlined-size-small"
          defaultValue={(firebase.auth().currentUser) ? firebase.auth().currentUser.displayName.split(" ")[0] + " " + firebase.auth().currentUser.displayName.split(" ").slice(-1)[0][0] + "." : "anonymous"}
          size="small"
          onChange={(event) => setCommentAuther(event.target.value)}
        />)
      }
              <FormControl
                fullWidth
                variant="outlined"
                onChange={(event) => setComment(event.target.value)}
              >





                <OutlinedInput
                  fullWidth
                  multiLine={true}
                  placeholder="Comment"
                  // rows={5}
                  // rowsMax={15} //TODO: figure out mulitLine textbox
                  id="comment"
                  value={comment}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="submit comment"
                        onClick={() =>
                          props.submitComment(props.q_id, commentAuthor, comment, setComment, props.setQuestion, props.question)
                        }
                        color="primary"
                      >
                        <ReplyOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="img_submit">
                <CropOriginalIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
      <Paper style={questionBottomBar}>
        <div class = "bottomBarElems">
          <Typography variant="subtitle2" style={{ color: '#3f51b5', fontSize: 14}} display="inline">
            <Grid item>
              <IconButton aria-label="upvote" size="small" onClick={() => submitLike(props.q_id)}>
                <ThumbUpAltIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Typography>
          <Divider orientation="vertical" style={{ marginLeft: 10, marginRight: 10}} />
          <Typography display="inline" style={{color: '#3f51b5', fontSize: 13, marginTop: 1, fontWeight: 300 }}>{likes}</Typography>
          <Typography display="inline" style={{ marginLeft: 'auto', color: 'grey', fontSize: 14 }}>{formattedDate}</Typography>
        </div>
      </Paper>

    </div>
  );
};

export default QuestionCard;
