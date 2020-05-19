import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import {
  Grid,
  Box,
  Typography,
  Button
}
from '@material-ui/core';

class AccountFirebasePage extends React.Component {
  state = {
    isSignedIn: false
  };

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID
      // ...
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  getNotSignedInScreen = () => (
    <Grid direction="column" align="center">
      <Typography>You are not signed in.</Typography>
      <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
    </Grid>
  );

  getSignedInScreen = () => (
    <Grid direction="column" align="center">
      <Typography>Welcome {firebase.auth().currentUser.displayName}!</Typography>
      <Button onClick={() => firebase.auth().signOut()}>Sign-out</Button>
    </Grid>
  );

  render() {
    if (!this.state.isSignedIn) {
      return this.getNotSignedInScreen();
    }
    return this.getSignedInScreen();
  }
}

export default AccountFirebasePage;
