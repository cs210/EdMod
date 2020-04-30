import React, { useState, useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import QuestionCard from './QA_TextCard.js'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import QA_AnswerCards from './QA_AnswerCards.js'
import firebase from '../../../config/firebase.js'
import AddIcon from '@material-ui/icons/Add';
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

const addPost = (props) => {
  console.log("I AM HERERERERER")
  console.log("updated title: ", props.title)
  console.log("updated text: ", props.text)
  props.setNewPost(false)
  firebase.firestore().collection("questions").add({
    data:{
      author: "John Chuter",
      title: props.title,
      text: props.text,
      tags: props.tags,
      solved: false,
      attachments: []
    },
    threads:{}
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
    case "entry3":
      props.setTags(event.target.value);
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
     style={{maxWidth: '300px', maxHeight: '30px', minWidth: '300px', minHeight: '30px', margin: "0px 0px 0px 10px"}}
     onClick={() => addPost(props)}
   >
  Post my question!
  </Button>
);
}

const QANewPost = (props) => {
  const [title, setTitle] = useState('Enter a one line summary.');
  const [text, setText] = useState('');
  const [attachments, setAttachments] = useState([])
  const [tags, setTags] = useState({"spring 2020": 0, "scratch":0 })

  const classes = useStyles();

  function handleClickTag(event, tag) {
   var tag_list = tags;
   tag_list[tag] = !tag_list[tag];
   setTags(tag_list);
  }

  return (

    <div className = "new-post">
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
            />
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
          <Grid container item xs={3} justify="center"><span>Tags:</span></Grid>
          <Grid item xs={8}>
          <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-end">
              <Grid key='question_tags' item>
              {Object.keys(tags).map((tag)=> {
            if(tags[tag]==1){
              return(
              <Chip size="small"
              clickable
              onClick={(e) => handleClickTag(e, tag)}
              color="primary"
            label={tag}
          />);
            }
            else{
              return(
              <Chip size="small"
              clickable
              onClick={(e) => handleClickTag(e, tag)}
              color="secondary"
            label={tag}
          />);
            }
            })   
      }
        </Grid>
        </Grid>

        </Grid>

        </Grid>
        <SubmitButton title={title} text={text} tags={tags} setNewPost={props.setNewPost}/>
      </div>

    // <div className = "new-post">
    // <Grid container direction="column" alignItems="center">
    //     <Grid item xs={12}>
    //       <form>
    //
    //       <Grid item xs={8}>
    //     <Paper className={classes.paper}>xs=8</Paper>
    //   </Grid>
    //   <Grid item xs={4}>
    //     <Paper className={classes.paper}>xs=4</Paper>
    //   </Grid>
    //
    //         </form>
    //       </Grid>
    //     </Grid>
    // </div>

      // <Button
      //    variant="contained"
      //    color="primary"
      //    size="small"
      //    className="add-post"
      //    style={{maxWidth: '300px', maxHeight: '30px', minWidth: '300px', minHeight: '30px', margin: "0px 0px 0px 10px"}}
      //    onClick={() => addPost(props)}
      //  >
      // Post my question!
      // </Button>

      //
      // <div className = "new-post-entry">
      //   <span> Summary: </span>
      //   <TextField
      //     id="outlined-secondary"
      //     label="Outlined secondary"
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </div>
      // <div>
      //   <span> Details: </span>
      //   <TextField
      //     id="outlined-secondary"
      //     label="Outlined secondary"
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </div>
  );
};

export default QANewPost;
