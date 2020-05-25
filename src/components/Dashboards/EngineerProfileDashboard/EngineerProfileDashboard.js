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

// 263023085 // Flynn
// https://vimeo.com/148751763 // Roll

// import Nikola from "../../../images/tesla_profile.jpg"; // TODO from pull

import {
  Grid,
  Box,
  Typography
}
from '@material-ui/core';

class EngineerProfileDashboard extends Component {
  constructor(props) {
    super(props);

    this.onMonthClick = this.onMonthClick.bind(this)

    this.state = {
      loading: false,
      currMonth: "May",
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
              fullName: "No spotlight for this month. Here's random video instead.",
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
      return (<Typography>Loading...</Typography>)
    }
    return this.state.spotlightDoc.type == "video" ?
      (<Grid
        container
        alignItems="center"
        direction="column"
      >
        <Box height={10}/>
        <Typography>Selected month: {this.state.currMonth}</Typography>
        <SpotlightComboVid
          fullName={this.state.spotlightDoc.fullName}
          videoURL={this.state.spotlightDoc.videoURL}
          onMonthClick={this.onMonthClick}
        />
      </Grid>) : (<Typography>{this.state.spotlightDoc.fullName} SPOTIGHT TEXT TYPE (WIP)</Typography>);
  }
}

export default EngineerProfileDashboard;
