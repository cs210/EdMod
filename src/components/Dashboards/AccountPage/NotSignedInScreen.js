import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import {
  Grid,
  Typography
}
from '@material-ui/core';

export default function NotSignedInScreen(props) {
  return (
    <Grid direction="column" align="center">
      <Typography>You are not signed in.</Typography>
      <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={firebase.auth()}/>
    </Grid>
  );
}
