import React, { Component } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  // ExpandMoreIcon, // this fails unless imported as below
  Avatar,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Derpy from "../../../images/derpcat.jpg";
import RouteDerpyButton from './RouteDerpyButton.js';

class EngineerProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.handleExpandClick = this.handleExpandClick.bind(this)
  }

  handleExpandClick = () => {
    this.setState(prevState => ({
        isExpanded: !prevState.isExpanded
      })
    );
  }

  // TODO pass profile object thru props; grab avatar image, data
  // const { classes } = this.props; // or something like this; figure out;
  // make class into function; "stateless"?
  render() {
    // const classes = useStyles();
    return (
      <Box width={1/4} m={1}>

        <Card>
          <Grid container alignItems="center" justify="center">
            <CardMedia src={Derpy} component="img"/>

            <CardContent>
              <Typography variant="h6">
                Derpy McDerpface
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton onClick={this.handleExpandClick}>
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={this.state.isExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                  <Typography variant="caption">Hometown:</Typography>
                  <Typography variant="body1">Mexico City, MX </Typography>

                  <Typography variant="caption"><br/>Education:</Typography>
                  <Typography variant="body1">Universidad Nacional Autónoma de Mexico </Typography>

                  <Typography variant="caption"><br/>About Me:</Typography>
                  <Typography variant="paragraph"><br/>I was born and raised in el DF and I moved to the US six years ago for better oportunities and I’ve been happily living in Oakland since. I am acively involved in Techqueria, an org for Latinx in Tech where I help organize and run events. </Typography>
              </CardContent>
            </Collapse>
            </Grid>
          </Card>
      </Box>
    );
  }
}

export default EngineerProfileCard;


// <CardActions>
//   <RouteDerpyButton/>
// </CardActions>
