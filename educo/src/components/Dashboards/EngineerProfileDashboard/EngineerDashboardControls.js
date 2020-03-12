import React, { Component } from "react";
import {
  Box,
  // List,
  Grid,
  // Card,
  // CardContent,
  // CardActions,
  // Collapse,
  IconButton,
  Typography
} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent align="center">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Engineer of the Month
        </Typography>
        <Typography variant="h5" component="h2">
          March Spotlights
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          03/20
        </Typography>
        <Typography variant="body2" component="p">
          Engineers from within the community.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function EngineerDashboardControls() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" >
      <Button
        // variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ChevronLeftIcon />}
      >
        02/20
      </Button>
      <SimpleCard />
      <Button
        // variant="contained"
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
