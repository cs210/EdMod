import React, { Component } from "react";
import firebase from 'firebase';
import Vimeo from '@u-wave/react-vimeo';

import ReactGA from 'react-ga';
import SpotlightVideo from './SpotlightVideo'

// 263023085 // Flynn TODO from pull
// https://vimeo.com/148751763 // Roll

import {
  Grid,
  Box,
  Typography
}
from '@material-ui/core';

class EngineerProfileDashboard extends Component {
  render() {
    return (
      <Grid
        container
        alignItems="center"
        direction="column"
      >
        <SpotlightVideo videoURL={this.props.videoURL} />
      </Grid>
    );
  }
}

export default EngineerProfileDashboard;
