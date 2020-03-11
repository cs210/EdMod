import React, { Component } from "react";
import EngineerProfileCard from './EngineerProfileCard';

import {
  Container,
  Button,
  Grid,
}
from '@material-ui/core';

class EngineerProfileDashboard extends Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <EngineerProfileCard/>
        <EngineerProfileCard/>
      </Grid>
    );
  }
}

export default EngineerProfileDashboard;
//
