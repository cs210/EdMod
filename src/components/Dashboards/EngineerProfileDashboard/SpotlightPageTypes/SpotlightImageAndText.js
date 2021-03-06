// 2. image + text
// data: type, date, string name, image, string content
// UI: image left, string right

import React, { Component } from "react";
import EngAvaTitleCard from '../EngAvaTitleCard';
import EngProfText from '../EngProfText';


import {
  Grid,
  Box,
}
from '@material-ui/core';

class SpotlightImageAndText extends Component {
  render() {
    return (
      <Grid width={2/3}
        container
        justify="center"
        direction="row"
      >
        <EngAvaTitleCard image={this.props.image} fullName={this.props.fullName}/>
        <Box width={2/3 - 1/4 - 7/18}></Box>
        <EngProfText/>
      </Grid>
    );
  }
}

export default SpotlightImageAndText;
