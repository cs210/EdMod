import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SpotlightSimple(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent align="center">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Engineer of the Month
        </Typography>
        <Typography variant="h5" component="h2">
          { props.fullName }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { props.currMonth + ' Spotlight' }
        </Typography>
        <Typography variant="body2" component="p">
          Engineers from within the community.
        </Typography>
      </CardContent>
    </Card>
  );
}
