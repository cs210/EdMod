import React, { Component } from "react";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography
} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import SpotlightCard from './SpotlightCard';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function EngineerDashboardControls() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" >
      <Button
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ChevronLeftIcon />}
      >
        02/20
      </Button>
      <SpotlightCard/>
      <Button
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ChevronRightIcon />}
      >
        04/20
      </Button>
    </Grid>
  );
}
