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

// selected month
import {
  Grid,
  Box,
  Typography
}
from '@material-ui/core';

class EngineerProfileDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      month: "May", // currMonth TODO
      spotlightDoc: {
        fullName: "loading",
        videoURL:"https://vimeo.com/148751763",
        month: "May"
      },
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    const docRef = firebase.firestore().collection("spotlights").doc(this.state.month);

    docRef.get().then((doc) => {
        if (doc.exists) {
          this.setState({
            loading: false,
            spotlightDoc: doc.data(),
          });
        } else {
          this.setState({
            loading: false,
            spotlightDoc: {
              fullName: "No spotlight for this month. Here's random Vimeo video instead.",
              type: "video",
              videoURL: "https://vimeo.com/channels/music/162052542"
            },
          });
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
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
        <Typography>{this.state.spotlightDoc.fullName}</Typography>
        <SpotlightComboVid videoURL={this.state.spotlightDoc.videoURL} />
      </Grid>) : (<Typography>{this.state.spotlightDoc.fullName} SPOTIGHT TEXT TYPE (WIP)</Typography>);
  }
}

export default EngineerProfileDashboard;
