import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import {
  Grid,
  Box,
  Typography
}
from '@material-ui/core';

export default function NotSignedInScreen(props) {
  return (
    <Grid direction="column" align="center">
      <Box height={15}/>
      <Typography>You are not signed in.</Typography>
      <Box height={15}/>
      <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={firebase.auth()}/>
      <Box height={15}/>
    </Grid>
  );
}
