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
import FormTimgSpot from './FormTImgSpot';

const ManagerSpotlightForm = () => (
  <Box>
    <FormVideoSpotlight />
    <Box height={50} />
    <FormTimgSpot />
  </Box>
);

export default ManagerSpotlightForm;
