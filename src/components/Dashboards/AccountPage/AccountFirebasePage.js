import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import SignedInScreen from './SignedInScreen.js';
import NotSignedInScreen from './NotSignedInScreen.js';

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

  render() {
    return this.state.isSignedIn ?
      <SignedInScreen /> : <NotSignedInScreen uiConfig={this.uiConfig}/>;
  }
}

export default AccountFirebasePage;
