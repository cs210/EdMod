import React, { Component } from "react";
import firebase from 'firebase';
import Vimeo from '@u-wave/react-vimeo';
import EngAvaTitleCard from './EngAvaTitleCard';
import EngProfText from './EngProfText';
import SpotlightSimple from './SpotlightSimple';
import ReactGA from 'react-ga';
import SpotlightComboVid from './SpotlightPageTypes/SpotComboVid'
import SpotlightVideo from './SpotlightPageTypes/SpotlightVideo'
import SpotlightImageAndText from './SpotlightPageTypes/SpotlightImageAndText'

import {
  Grid,
  Box,
  Typography
}
from '@material-ui/core';

class EngineerProfileDashboard extends Component {
  constructor(props) {
    super(props);

    const realMonthIndex = new Date().getMonth()
    const monthMap = {
      0 : "Jan",
      1 : "Feb",
      2 : "Mar",
      3 : "Apr",
      4 : "May",
      5 : "Jun",
      6 : "Jul",
      7 : "Aug",
      8 : "Sep",
      9 : "Oct",
      10 : "Nov",
      11 : "Dec"
    }
    const realMonthKey = monthMap[realMonthIndex]
    this.state = {
      loading: false,
      currMonth: realMonthKey,
      spotlightDoc: {
        fullName: "loading",
        videoURL:"https://vimeo.com/148751763",
        month: "May"
      },
    };
  }

  updateSpotlightToMonth = (newMonth) => {
    this.setState({ loading: true });

    const docRef = firebase.firestore().collection("spotlights").doc(newMonth);

    docRef.get().then((doc) => {
        if (doc.exists) {
          this.setState({
            loading: false,
            spotlightDoc: doc.data(),
            currMonth: doc.data().month
          });
        } else {
          this.setState({
            loading: false,
            spotlightDoc: {
              fullName: "No spotlight for this month. Here's a random video instead.",
              type: "video",
              videoURL: "https://vimeo.com/channels/music/162052542"
            },
          });
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  componentDidMount() {
    this.updateSpotlightToMonth(this.state.currMonth);
  }

  onMonthClick = (month) => {
    this.setState({ currMonth: month});
    this.updateSpotlightToMonth(month)
  }

  render() {
    ReactGA.pageview("spotlight pageview");

    if (this.state.loading) {
      return (
        <Grid align="center" justify="center">
          <Typography>Loading...</Typography>
        </Grid>
      );
    }
    return this.state.spotlightDoc.type == "video" ?
      (<Grid
        container
        alignItems="center"
        direction="column"
      >
        <Box height={10}/>
        <SpotlightComboVid
          fullName={this.state.spotlightDoc.fullName}
          currMonth={this.state.currMonth}
          videoURL={this.state.spotlightDoc.videoURL}
          onMonthClick={this.onMonthClick}
        />
      </Grid>) : (<Typography>{this.state.spotlightDoc.fullName} SPOTIGHT TEXT TYPE (WIP)</Typography>);
  }
}

export default EngineerProfileDashboard;
