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

// 263023085 // Flynn TODO from pull
// https://vimeo.com/148751763 // Roll
import Nikola from "../../../images/tesla_profile.jpg"; // TODO from pull

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
      spotlightDoc: { fullName: "loading" },
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    firebase.firestore().collection("spotlights").limit(1)
      .get()
      .then((querySnapshot) => {
        let self = this
        let spotlightDoc = {}
        querySnapshot.forEach( (doc) => {
          this.setState({ loading: false, spotlightDoc: doc.data() });
        });
      })
  }

  render() {
    ReactGA.pageview("spotlight pageview");

    /* Data pull occurs here
      // -> condition occurs here
      // -> UI implementation does not
      // new UI component: UI common/top
      // component for different top + bottom combos
      // condition to return correct combo
      */



    return (
      // TODO: conditional render one or other
      <Grid
        container
        alignItems="center"
        direction="column"
      >
        <Box height={10}/>
        <Typography>{this.state.spotlightDoc.fullName}</Typography>
        <SpotlightComboVid fullName={this.state.spotlightDoc.fullName} videoURL="https://vimeo.com/263023085" />

      </Grid>
    );
  }
}

export default EngineerProfileDashboard;
