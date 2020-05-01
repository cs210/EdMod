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
import Nikola from "../../../images/tesla_profile.jpg";

class EngineerProfileCard extends Component {
  render() {
    return (
      <Box width={1/4}>

        <Card>
          <Grid container >
            <CardMedia src={Nikola} component="img"/>

            <CardContent>
            <Typography variant="h6">
              Nikola Tesla
            </Typography>
            </CardContent>

          </Grid>
        </Card>
      </Box>
    );
  }
}

export default EngineerProfileCard;
