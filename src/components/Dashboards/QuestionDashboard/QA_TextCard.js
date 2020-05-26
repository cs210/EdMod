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


const QuestionCard = (props) => {
  const [comment, setComment] = useState("");
  var title = props.question.data.title;
  var q_body = props.question.data.text;
  var tags = props.question.data.tags;
  var attachments = props.question.attachments;
  var author = props.question.data.author;
  var answers = props.question.threads;

  return (
    <div className = "question_card">
      <Paper style={{ padding: 25, borderRadius: 10, boxSizing: 'border-box', margin: 10}}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs container direction="row" spacing={2}>
                <Grid item xs>
                  <Typography variant="h3">{title}</Typography>
                </Grid>

                <Grid item>
                  <IconButton aria-label="notif" size="small">
                    <NotificationImportantIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="upvote" size="small">
                    <ThumbUpAltIcon fontSize="inherit" />
                  </IconButton>
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
                      return <Chip size="small" label={tag} />;
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
        <Divider style={{ margin: 15 }} />
        <Paper style={{ padding: 10, margin: 10 }}>
          <Grid container direction="row" spacing={0} alignItems="center">
            <Grid item xs>
              <FormControl
                fullWidth
                variant="outlined"
                onChange={(event) => setComment(event.target.value)}
              >
                <InputLabel>Comment</InputLabel>
                <div></div>
                <OutlinedInput
                  fullWidth
                  multiLine={true}
                  rows={5}
                  rowsMax={15} //TODO: figure out mulitLine textbox
                  id="comment"
                  value={comment}
                  //onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="submit comment"
                        onClick={() =>
                          props.submitComment(props.q_id, comment, setComment, props.setQuestion, props.question)
                        }
                        //onMouseDown={handleMouseDownPassword}
                        //TODO: actually capture text
                        //TODO: More complex text editor
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
        {Array.isArray(answers) && answers.length ? (
          <div />
        ) : (
          <Typography variant="subtitle2" style={{ color: "blue" }}>
            {" "}
            Be the first to answer!{" "}
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default QuestionCard;
