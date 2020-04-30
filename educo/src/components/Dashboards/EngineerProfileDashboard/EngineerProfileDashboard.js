import React, { Component } from "react";
import YouTube from '@u-wave/react-youtube';
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
          direction="column"
          justify="center"
        >
          <YouTube
            video="NxSDNogkKX0"
            autoplay
          />
          <Grid
            container
            direction="row"
            justify="center"
          >
            <EngineerProfileCard/>
            <EngineerProfileCard/>
          </Grid>
        </Grid>
        </>
    );
  }
}

export default EngineerProfileDashboard;
