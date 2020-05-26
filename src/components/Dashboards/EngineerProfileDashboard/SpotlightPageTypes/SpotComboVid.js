import React, { Component } from "react";
import firebase from 'firebase';
import Vimeo from '@u-wave/react-vimeo';

import ReactGA from 'react-ga';
import SpotlightVideo from './SpotlightVideo';
import SpotCommon from './SpotCommon';

import {
  Grid,
  Box,
  Typography
}
from '@material-ui/core';

class SpotComboVid extends Component {

  onMonthClick = (month) => {
    this.props.onMonthClick(month);
  }

  render() {
    return (
      <Grid
        container
        alignItems="center"
        direction="column"
      >
        <SpotCommon
          fullName={this.props.fullName}
          currMonth={this.props.currMonth}
          width="100%"
          onMonthClick={this.onMonthClick}
        />
      <SpotlightVideo videoURL={this.props.videoURL}/>
      </Grid>
    );
  }
}

export default SpotComboVid;
