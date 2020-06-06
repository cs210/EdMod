import React, { Component } from 'react';
import firebase from 'firebase';

import {
  Grid,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';

import { Button } from 'reactstrap';

class FormVidSpot3 extends Component {

  defaultState = {
    fullName: '',
    month: 'Jan',
    type:'video',
    videoURL: ''
  };

  constructor() {
    super();
    this.state = this.defaultState;
  }

  resetForm = () => {
    this.setState(this.defaultState)
  }

  validateForm = () => {
    return this.state.fullName != '' && this.state.videoURL != '';
  }

  onFormSubmit = () => {
    if (!this.validateForm()) {
      alert("Please enter both a name and a video URL")
      return
    }

    firebase.firestore().collection("spotlights").doc(this.state.month).set(this.state)
      .then(() => {
        alert("Successfully updated spotlight!", null, 2)
        this.resetForm()
      })
      .catch((error) => {
        alert("Error writing document" + error, null, 2)
        this.resetForm()
      });

  }

  onNameChange = (event) => {
    this.setState({ fullName: event.target.value })
  }
  onMonthChange = (event) => {
    this.setState({ month: event.target.value })
  }
  onURLChange = (event) => {
    this.setState( { videoURL: event.target.value } )
  }

  render() {
    return (
      <Box width={1/2} bgcolor={grey[100]} p={5} borderRadius={8}>
        <Grid
          container
          direction="column"
          width={.5}
          spacing={2}
        >
          <h3> New Spotlight Form </h3>
          <Grid item>
            <TextField fullWidth id="fullName" label="Name" value={this.state.fullName} onChange={ this.onNameChange }/>
          </Grid>

          <Grid item container alignContent="flex-start">
            <FormControl>
              <InputLabel id="monthLabel">Month</InputLabel>
              <Select fullWidth id="monthLabel" value={this.state.month} onChange={ this.onMonthChange }>
                <MenuItem value="Jan">January</MenuItem>
                <MenuItem value="Feb">February</MenuItem>
                <MenuItem value="Mar">March</MenuItem>
                <MenuItem value="Apr">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="Jun">June</MenuItem>
                <MenuItem value="Jul">July</MenuItem>
                <MenuItem value="Aug">August</MenuItem>
                <MenuItem value="Sep">September</MenuItem>
                <MenuItem value="Oct">October</MenuItem>
                <MenuItem value="Nov">November</MenuItem>
                <MenuItem value="Dec">December</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <TextField fullWidth id="vidURL" label="Video URL" value={this.state.videoURL} onChange={ this.onURLChange }/>
          </Grid>

          <Grid item>
            <Box height={10} />
            <Button onClick={this.onFormSubmit} > Submit </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default FormVidSpot3;
