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

const FormVideoSpotlight = () => (
  <div>
    <h3>New Video Spotlight Form</h3>
      <Formik
        initialValues={{fullName: 'John Smith', month: 'Jan', type:'video', videoURL: 'https://vimeo.com/148751763'}}
        onSubmit={(values, actions) => {
          firebase.firestore().collection("spotlights").doc(values.month).set(values)
            .then(function() {
              alert("Document successfully written!", null, 2);
            })
            .catch(function(error) {
              alert("Error writing document" + error, null, 2)
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

export default FormVideoSpotlight;
