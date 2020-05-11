import React, { Component } from "react";
import YouTube from '@u-wave/react-youtube';
import Vimeo from '@u-wave/react-vimeo';
import EngAvaTitleCard from './EngAvaTitleCard';
import EngProfText from './EngProfText';
import SpotlightSimple from './SpotlightSimple';
import ReactGA from 'react-ga';

import {
  Grid,
  Box,
}
from '@material-ui/core';

// TODO: pull thumbnail for Avatar, video title for name, and description for body

class EngineerProfileDashboard extends Component {
  render() {
    ReactGA.pageview("spotlight pageview");
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
          <Box width={2/3} height={480}>
            <YouTube
              video="xP76q3quHb0"
              autoplay
              width="100%"
              height="100%"
            />
          </Box>

          <Box height={50}/>
          <Grid width={2/3}
            container
            justify="center"
            direction="row"
          >
            <EngAvaTitleCard/>
            <Box width={2/3 - 1/4 - 7/18}></Box>
            <EngProfText/>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default EngineerProfileDashboard;
