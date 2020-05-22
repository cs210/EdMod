import React from 'react';
import firebase from 'firebase';
import SignedInUserScreen from "./SignedInUserScreen";
import SignedInManagerScreen from "./SignedInManagerScreen";

import {
  Grid,
  Typography,
  Button
}
from '@material-ui/core';

const getUserIsManager = () => {
    const currentUserID = firebase.auth().currentUser.uid;
    return currentUserID == "PjiiB2sd6Id5og8dEKsT64qjBe03" ||
      currentUserID == "rHnyd1fyAQQ8DxuQJiLL37bQcMo1";
      // add whatever users are managers
}


export default function SignedInScreen() {
  return getUserIsManager() ?
    <SignedInManagerScreen /> : <SignedInUserScreen />
}
