import React, { Component } from "react";
import EngineerProfileCard from './EngineerProfileCard';

import {
  Grid,
}
from '@material-ui/core';

class EngineerProfileDashboard extends Component {
  render() {
    // UI controls on TOP: (<prev) <CURR_MONTH> (next>)
    // proper item spacing

    return (
      <Grid
        container
        direction="row"
        justify="center"
      >
        <EngineerProfileCard/>
        <EngineerProfileCard/>
        <EngineerProfileCard/>
      </Grid>
    );
  }
}

export default EngineerProfileDashboard;
//
