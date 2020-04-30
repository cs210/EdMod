import React, { Component } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import Derpy from "../../../images/derpcat.jpg";
import RouteDerpyButton from './RouteDerpyButton.js';

class EngProfText extends Component {
  render() {
    return (
      <Box width={2/4}>
        <Card>
          <CardContent>
            <Typography variant="paragraph"><br/>I was born and raised in el DF and I moved to the US six years ago for better oportunities and I’ve been happily living in Oakland since. I am acively involved in Techqueria, an org for Latinx in Tech where I help organize and run events. </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default EngProfText;
