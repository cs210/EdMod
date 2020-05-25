import React, { Component } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Typography
} from '@material-ui/core';

class EngineerProfileCard extends Component {
  render() {
    return (
      <Box width={1/4}>

        <Card>
          <Grid container >
            <CardMedia src={this.props.image} component="img"/>

            <CardContent>
            <Typography variant="h6">
              {this.props.fullName}
            </Typography>
            </CardContent>

          </Grid>
        </Card>
      </Box>
    );
  }
}

export default EngineerProfileCard;
