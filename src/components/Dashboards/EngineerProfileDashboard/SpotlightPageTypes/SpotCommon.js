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

class SpotCommon extends Component {
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  makeButton = (month) => {
    return (
      <button value={month}
        onClick={(event) => {
          this.props.onMonthClick(event.target.value);
        }}
      >
        { month }
      </button>
    );
  }

  buttons = this.months.map(this.makeButton)

  render() {
    return (
      <Grid direction="column" alignItems="center">
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="row"
        >
          {this.buttons}
        </Grid>
        {this.props.fullName}
      </Grid>
    );
  }
}

export default SpotCommon;
