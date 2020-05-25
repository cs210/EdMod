// 1. video
// data: type, date, string name, string videoURL
// UI: just a video
// data pull happens in EngProfDash;
  // populates name field
  // render UI conditional on type, passing props
    // vid type or img+text type

import React, { Component } from "react";
import Vimeo from '@u-wave/react-vimeo';

import {
  Grid
}
from '@material-ui/core';

class SpotlightVideo extends Component {
  render() {
    return (
      <Vimeo
        video={this.props.videoURL}
        width={640}
        height={480}
        autoplay
      />
  );
  }
}

export default SpotlightVideo;
