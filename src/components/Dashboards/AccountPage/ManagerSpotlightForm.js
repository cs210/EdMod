/* TODO:
  1. form submission
    type vid, text
  2. form pull
    UI types
STEPS:
  X1. vid form submit to firebase (name, date, type, url)
  X2. new vid ui type; no dates
  X3. vid ui type w/ firebase pull (most recent)

  4. text form submit to firebase (name, date, type, img, text)
  5. new text ui type; no dates
  6. text ui w/ firebase pull (most recent spotlight)

  7. add dates ui
  ~X8. add dates to forms
  9. ui logic; pull most recent spotlight for selected date
    // actually, only one spotlight for each data

  10. add gifs using giphycapture to README showing
    a. login non-manager account
    b. signout
    c. login manager account
    d. form submit
    e. spotlight update
*/

/* TODOs Monday
0 spotlights set for particular month
1 navButtons nav with date click
  // selected date part of state
  // clicking on a button changes state
2 spotlights get for particular month
*/

/* form(s) for manager submission:
-name
-date
type1:
  -video
type2:
  -img
  -text

if video type:
  name
  video url
  month of spotlight

if img+text type:
  name
  video url
  month of spotlight
*/

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
