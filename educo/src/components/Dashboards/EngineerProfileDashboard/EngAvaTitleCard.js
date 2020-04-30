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
