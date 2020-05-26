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
