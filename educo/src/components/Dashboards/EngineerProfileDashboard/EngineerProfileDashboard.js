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

class EngineerProfileDashboard extends Component {
  render() {
    return (
      <Box alignItems="center">
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
          <Box height={50}/>
          <Grid
            container
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
