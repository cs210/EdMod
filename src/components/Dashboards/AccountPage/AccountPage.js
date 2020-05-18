import { withAuthenticator } from '@aws-amplify/ui-react'
import React, { Component } from "react";
import ReactGA from 'react-ga';

import {
  Grid,
  Box,
}
from '@material-ui/core';

class AccountPage extends Component {
  render() {
    ReactGA.pageview("account pageview");
    return (
      <Box >
        account page when signed in (TODO)
      </Box>
    );
  }
}

export default withAuthenticator(AccountPage);
