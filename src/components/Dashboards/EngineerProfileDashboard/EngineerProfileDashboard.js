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
/* Data pull occurs here
  // -> type condition here
  // -> UI implementation not
  // new UI component: UI common/top
  // component for different top + bottom combos
  // condition to return correct combo
*/
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

    this.state = {
      loading: false,
      spotlightDoc: { fullName: "loading", videoURL:"https://vimeo.com/148751763" },
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
          this.setState({
            loading: false,
            spotlightDoc: doc.data(),
          });
        });
      })
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
      </Grid>) : (<Typography>SPOTIGHT TEXT TYPE (WIP)</Typography>);
  }
}

export default EngineerProfileDashboard;
