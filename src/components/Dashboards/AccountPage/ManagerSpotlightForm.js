import React from 'react';
import firebase from 'firebase';
import {
  Grid,
  Box,
  Typography,
  Button
}
from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormVideoSpotlight from './FormVideoSpotlight';
import FormVidSpot2 from './FormVidSpot2';
import FormVidSpot3 from './FormVidSpot3';
import FormTimgSpot from './FormTImgSpot';

const ManagerSpotlightForm = () => (
  <Box>
    {/*<FormVideoSpotlight />
    <Box height={50} /> */}
    {/*<FormVidSpot2 /> */}
    <FormVidSpot3 />
    {/*<Box height={50} />
    <FormTimgSpot /> */}
  </Box>
);

export default ManagerSpotlightForm;
