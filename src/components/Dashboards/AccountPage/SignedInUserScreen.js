import React from 'react';
import firebase from 'firebase';

import {
  Grid,
  Box,
  Typography,
  Button
}
from '@material-ui/core';

export default function SignedInUserScreen() {
  return (
    <Grid direction="column" align="center">
      <Box height={15} />
      <Typography>Welcome {firebase.auth().currentUser.displayName}!</Typography>
      <Box height={15} />
      <Button onClick={() => firebase.auth().signOut()}>Sign-out</Button>
      <Box height={30} />
      <Typography>This is the user login screen</Typography>
    </Grid>
  );
}
