/* TODO:
  1. form submission
    type vid, text
  2. form pull
    UI types
STEPS:
  X1. vid form submit to firebase (name, date, type, url)
  2. new vid ui type; no dates
  3. vid ui type w/ firebase pull (most recent)

  4. text form submit to firebase (name, date, type, img, text)
  5. new text ui type; no dates
  6. text ui w/ firebase pull (most recent spotlight)

  7. add dates ui
  8. add dates to forms
  9. ui logic; pull most recent spotlight for selected date

  10. add gifs using giphycapture to README showing
    a. login non-manager account
    b. signout
    c. login manager account
    d. form submit
    e. spotlight update
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

const Example = () => (
  <div>
    <h3>New Video Spotlight Form</h3>
      <Formik
        initialValues={{fullName: 'John Smith', month: 'Jan', type:'video', videoURL: 'https://vimeo.com/148751763'}}
        onSubmit={(values, actions) => {
          // values:
          firebase.firestore().collection("spotlights").add(values)
          .then(function(docRef) {
              alert("Document successfully written!", null, 2);
          })
          .catch(function(error) {
              alert("Error writing document" + error, null, 2);
          });

        }}>{(props: FormikProps<any>) => (
        <Form direction="column">
          <Box flexDirection="column">
            <Field name="fullName" placeholder="John Smith" />
            <Field as="select" name="month">
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </Field>

            <Field name="videoURL" placeholder="https://vimeo.com/263023085" />
            <button type="submit">Submit</button>
          </Box>
        </Form>
      )}
    </Formik>
  </div>
);

export default Example;
