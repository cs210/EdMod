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
  // TODO pull state up
  constructor(props) {
    super(props);
    this.state = { currMonth: 'Jan'};
  }

  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  onButtonClick = (month) => {
    this.setState({ currMonth : month });
  }

  makeButton = (month) => {
    return (
      <button onClick={() => this.onButtonClick(month)}>
        { month }
      </button>
    );
  }

  buttons = this.months.map(this.makeButton)

  render() {
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
      >
        {this.buttons}
      </Grid>
    );
  }
}

export default SpotCommon;
