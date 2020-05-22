import React from 'react';
import firebase from 'firebase';

import {
  Grid,
  Typography,
  Button
}
from '@material-ui/core';

export default function SignedInScreen() {
  return (
    <Grid direction="column" align="center">
      <Typography>Welcome {firebase.auth().currentUser.displayName}!</Typography>
      <Button onClick={() => firebase.auth().signOut()}>Sign-out</Button>
    </Grid>
  );
}
