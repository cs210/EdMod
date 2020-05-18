import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

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
    <div>
      <h1>state: not signed in</h1>
      <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );

  getSignedInScreen = () => (
    <div>
      <p>Welcome {firebase.auth().currentUser.displayName}!</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );

  render() {
    if (!this.state.isSignedIn) {
      return this.getNotSignedInScreen();
    }
    return this.getSignedInScreen();
  }
}

export default AccountFirebasePage;
