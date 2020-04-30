import React, { Component } from "react";
import YouTube from '@u-wave/react-youtube';
import EngineerProfileCard from './EngineerProfileCard';
import EngineerDashboardControls from './EngineerDashboardControls';
import SpotlightSimple from './SpotlightSimple';

import {
  Grid,
  Box,
}
from '@material-ui/core';

class EngineerProfileDashboard extends Component {
  render() {
    return (
        <>
        <Grid
          container
          alignContent="center"
          direction="column"
        >
          <Box height={10}/>
          <SpotlightSimple/>
          <Box height={10}/>
          <YouTube
            video="NxSDNogkKX0"
            autoplay
            width={640}
            height={480}
          />
          <Box height={10}/>
          <EngineerProfileCard/>
        </Grid>
        </>
    );
  }
}

export default EngineerProfileDashboard;
