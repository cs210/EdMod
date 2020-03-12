import React, { Component } from "react";
import EngineerProfileCard from './EngineerProfileCard';
import EngineerDashboardControls from './EngineerDashboardControls';

import {
  Grid,
  Box,
}
from '@material-ui/core';

class EngineerProfileDashboard extends Component {
  render() {
    return (
        <>
        <EngineerDashboardControls/>

        <Box height={10}/>

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
