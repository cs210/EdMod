import React, { useState, useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import QuestionCard from './QA_TextCard.js'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import QA_AnswerCards from './QA_AnswerCards.js'
import firebase from '../../../config/firebase.js'
import { storage }  from '../../../config/firebase.js'

import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

import mockData from './mockData.js'
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Paper,
  Divider,
  Container,
  Button,
  Grid,
  IconButton
}
from '@material-ui/core';

const handleAttachmentChange = (props, event) => {
  console.log(firebase.storage)
  if (event.target.files) {
    console.log(event.target.files)
    props.setAttachments(event.target.files)

  }
}

// Upload attachments to post
const UploadAttachmentButton = (props) => {
  return (
    <div>
      <input type="file" multiple onChange={(event) => handleAttachmentChange(props, event)}/>
    </div>
  );
}

// Checks if file has a correct extention name
function hasExtension(fileName, exts) {
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
}

const addPost = (props) => {
  if (props.title === '' || props.text === '')  {
    props.setErr("Please enter a brief summary of your question.")
  } else {
    props.setNewPost(false)


    firebase.firestore().collection("questions").add({
      data:{
        author: "John Chuter",
        title: props.title,
        text: props.text,
        tags: Object.keys(props.tags),
        solved: false,
        date: new Date()
      },
      attachments: [],

    }).then(data => {
        console.log("currentData----------", data);
        // start
        var arrayLength = props.attachments.length;
        // var attachmentUrls = [];
        for (var i = 0; i < arrayLength; i++) {
          const image = props.attachments[i];
          if (hasExtension(image.name, ['.jpg', '.gif', '.png'])) {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) => {
              // progress function ...
            }, (error) => {
              // error function ...
              console.log(error);
            },
            () => {
              // complete function ...
              storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log("URLL---------------", url);
                // attachmentUrls.push(url);
                console.log("qid-------", props.q_id)
                firebase.firestore().collection("questions").doc(data.id)
                    .update({"attachments": firebase.firestore.FieldValue.arrayUnion(url)
                  });
              })
            });
          }
        }
        // end
      }
    );
  }
}

function submit(props, attachmentUrls) {
    console.log("hello");
    console.log("attachment irls!!!!!!!!!!!!!!!!!!!!!", attachmentUrls)
    // add post to firestore
    firebase.firestore().collection("questions").add({
      data:{
        author: "John Chuter",
        title: props.title,
        text: props.text,
        tags: Object.keys(props.tags),
        solved: false,
        attachmentUrls: attachmentUrls
      },
      attachments: [],
    });
}



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  }
}));

const handleChange = (props, event) => {
  let curr_id = event.target.id;
  switch(curr_id) {
    case "outlined-secondary":
      props.setTitle(event.target.value);
      break;
    case "standard-multiline-flexible":
      props.setText(event.target.value);
      break;
  }

}

const SubmitButton = (props) => {
  return (
  <Button
     variant="contained"
     color="primary"
     size="small"
     className="add-post"
     style={{maxWidth: '300px', maxHeight: '30px', minWidth: '300px', minHeight: '30px', margin: "10px 0px 0px 10px"}}
     onClick={() => addPost(props)}
   >
  Post my question!
  </Button>
);
}

const Tags = (props) => {
  return (
    <div>
      {
        Object.keys(props.tags).map((key, index) => (
          <span className="tags" id={key} onClick={(event) => handleClickTag(props, key, event)}>{key}</span>
        ))
      }
    </div>

  );
}

const handleClickTag = (props, tag, event) => {
  if (event.target.classList.contains("active_tag")) {
    document.getElementById(tag).classList.remove("active_tag");
  } else {
    event.target.classList.add("active_tag");
  }

  var tag_list = props.tags;
  tag_list[tag] = !tag_list[tag];
  props.setTags(tag_list);
}

const QANewPost = (props) => {
  const [title, setTitle] = useState('Enter a one line summary.');
  const [text, setText] = useState('');
  const [attachments, setAttachments] = useState([])
  const [tags, setTags] = useState({"spring 2020": 0, "scratch":0 })
  const [err, setErr] = useState('')
  const classes = useStyles();

  return (

    <div className = "new-post">
      <form autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={1}/>
          <Grid container item xs={3} justify="center"><span>Summary:</span></Grid>
          <Grid item xs={8}>
          <TextField
              id="outlined-secondary"
              className="new-post-text"
              label="Ask your question here"
              variant="outlined"
              color="secondary"
              style = {{width: 600}}
              onChange = {(event) => setTitle(event.target.value)}
              autoComplete="off"
            />
            <div className="err">{err}</div>
          </Grid>


          <Grid item xs={1}/>
          <Grid container item xs={3} justify="center"><span>Details:</span></Grid>
          <Grid item xs={8}>
          <TextField
              id="standard-multiline-flexible"
              className="new-post-text"
              label="Details"
              variant="outlined"
              color="secondary"
              multiline
              rows={10}
              style = {{width: 600}}
              fullHeight
              onChange = {(event) => setText(event.target.value)}
            />
          </Grid>

          <Grid item xs={1}/>
          <Grid container item xs={3} justify="center"><span>Attachments:</span></Grid>
          <Grid item xs={8}>
          <UploadAttachmentButton attachments = {attachments} setAttachments = {setAttachments} />
          </Grid>

          <Grid item xs={1}/>
          <Grid container item xs={3} justify="center"><span>Tags:</span></Grid>
          <Grid item xs={8}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-end">
                  <Grid key='question_tags' item>
                    <Tags tags = {tags} setTags={setTags}/>
                  </Grid>
            </Grid>
            </Grid>


            <Grid item xs={4}/>
            <Grid item xs={8}>
            <SubmitButton title={title} text={text} tags={tags} setNewPost={props.setNewPost} setErr={setErr} attachments = {attachments} q_id={props.q_id}/>
            </Grid>

          </Grid>
      </form>
    </div>
  );
};

export default QANewPost;
