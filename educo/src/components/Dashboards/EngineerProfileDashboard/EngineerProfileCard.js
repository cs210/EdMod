import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  // ExpandMoreIcon, // this fails unless imported as below
  Avatar,
  Typography
}
from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Derpy from "../../../images/derpcat.jpg";

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
  render() {
    return (
      <Box width={1/4}>
        <Card>
          <Avatar src={Derpy} />

          <Typography h1>
            Derpy McDerpface
          </Typography>


          <CardActions disableSpacing>
            <IconButton onClick={this.handleExpandClick}>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={this.state.isExpanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography subtitle1> Hometown: </Typography>
                <Typography paragraph> Mexico City, MX </Typography>

                <Typography subtitle1> Education: </Typography>
                <Typography paragraph> Universidad Nacional Autónoma de Mexico </Typography>

                <Typography subtitle1> About Me: </Typography>
                <Typography paragraph> I was born and raised in el DF and I moved to the US six years ago for better oportunities and I’ve been happily living in Oakland since. I am acively involved in Techqueria, an org for Latinx in Tech where I help organize and run events. </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    );
  }
}

export default EngineerProfileCard;
