import React, { Component } from "react";
import firebase from 'firebase';
import Vimeo from '@u-wave/react-vimeo';

import ReactGA from 'react-ga';
import SpotlightVideo from './SpotlightVideo'
import SpotlightHead from './SpotlightHead'

import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
}
from '@material-ui/core';
import Button from 'react-bootstrap/Button';

class SpotCommon extends Component {
  render() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const makeButton = (month) => {
      return (
        <Box m={0.5}>
          <Button
            value={month}
            variant="outline-secondary"
            active={ month == this.props.currMonth }
            m={10}
            onClick={(event) => {
              month = event.target.value
              this.props.onMonthClick(month);
              this.setState({ currMonth: month})
            }}
          >
            { month }
          </Button>
        </Box>
      );
    }

    const buttons = months.map(makeButton);

    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        align="center"
        justify="center"
      >
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="row"
        >
          {buttons}
        </Grid>
        {/*
        <Card>
          <CardContent>
            <Typography variant="h6">
              {' ' + this.props.fullName+' '}
            </Typography>
          </CardContent>
        </Card>
        */}
        <Box height={10} />
        <SpotlightHead
          fullName={ this.props.fullName }
          currMonth={ this.props.currMonth }
        />
        <Box height={10} />
      </Grid>
    );
  }
}

export default SpotCommon;
