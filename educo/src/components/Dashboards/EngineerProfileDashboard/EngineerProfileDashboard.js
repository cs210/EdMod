import React, { Component } from "react";
import EngineerProfileCard from './EngineerProfileCard';
import EngineerDashboardControls from './EngineerDashboardControls';

import {
  Grid,
}
from '@material-ui/core';

class EngineerProfileDashboard extends Component {
  render() {
    // UI controls on TOP: (<prev) <CURR_MONTH> (next>)
    // proper item spacing

    return (
        <>
        <EngineerDashboardControls/>

        <Grid
          container
          direction="row"
          justify="center"
        >
          <EngineerProfileCard/>
          <EngineerProfileCard/>

        </Grid>
        </>
    );
  }
}

export default EngineerProfileDashboard;
//
