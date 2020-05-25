import React, { Component } from "react";
import Vimeo from '@u-wave/react-vimeo';
import EngAvaTitleCard from './EngAvaTitleCard';
import EngProfText from './EngProfText';
import SpotlightSimple from './SpotlightSimple';
import ReactGA from 'react-ga';
import SpotlightVideo from './SpotlightPageTypes/SpotlightVideo'
import SpotlightImageAndText from './SpotlightPageTypes/SpotlightImageAndText'

// 263023085 // Flynn
// https://vimeo.com/148751763 // Roll

import {
  Grid,
  Box,
}
from '@material-ui/core';

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
          <SpotlightVideo videoURL="https://vimeo.com/263023085" />

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
