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
  props.setNewPost(false)
}


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  input: {
    height: 400,
    width: 600
  }
}));


const QANewPost = (props) => {
  const [title, setTitle] = useState('Enter a one line summary.');
  const [text, settext] = useState('');
  const [attachments, setAttachments] = useState([])
  const [tags, setTags] = useState([])

  const classes = useStyles();

  return (

    <div className = "new-post">
      <form>
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
            />
          </Grid>

          <Grid item xs={1}/>
          <Grid container item xs={3} justify="center"><span>Tags:</span></Grid>
          <Grid item xs={8}>
          <TextField
              id="outlined-secondary"
              className="new-post-text"
              label="Details"
              variant="outlined"
              color="secondary"
              style = {{width: 600}}
            />
          </Grid>


        </Grid>
        </form>
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
