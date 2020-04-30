import React, { Component } from "react";
import YouTube from '@u-wave/react-youtube';
import EngAvaTitleCard from './EngAvaTitleCard';
import EngProfText from './EngProfText';
import SpotlightSimple from './SpotlightSimple';

import {
  Grid,
  Box,
}
from '@material-ui/core';

// TODO: pull thumbnail for Avatar, video title for name, and description for body

class EngineerProfileDashboard extends Component {
  render() {
    return (
      <Box >
        <Grid
          container
          alignItems="center"
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
          <Box height={50}/>
          <Grid width={2/3}
            container
            justify="center"
            alignContent="center"
            direction="row"
          >
            <EngAvaTitleCard/>
            <EngProfText/>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default EngineerProfileDashboard;
