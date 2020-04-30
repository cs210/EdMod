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
import Derpy from "../../../images/derpcat.jpg";

class EngineerProfileCard extends Component {
  render() {
    return (
      <Box width={1/4}>

        <Card>
          <Grid container >
            <CardMedia src={Derpy} component="img"/>

            <CardContent>
            <Typography variant="h6">
              Derpy McDerpface
            </Typography>
            </CardContent>

          </Grid>
        </Card>
      </Box>
    );
  }
}

export default EngineerProfileCard;
