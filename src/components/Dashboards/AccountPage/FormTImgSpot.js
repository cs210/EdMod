import React from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Grid,
  Box,
  Typography
}
from '@material-ui/core';

const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media(min-width: 786px) {
    width: 60%;
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }

  h3 {
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }

  .error {
    border: 2px solid #FF6565;
  }

  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media(min-width: 786px) {
    width: 50%;
  }
`;

const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;

// Schema for yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
  .required("*Name is required"),
});

const TextImageSpotForm = () => {
  return (
    <CONTAINER>
      <h3>Text + Image Form</h3>
      <Typography>Text + Image Form</Typography>
      <Formik
        initialValues={{ fullName:""}}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
          // TODO: add actual firebase upload here
        }}
      >
        {/* Callback function containing Formik state and helpers that handle common form actions */}
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
        <MYFORM onSubmit={handleSubmit} className="mx-auto">
          {console.log(values)}
          <Form.Group controlId="formName">
            <Form.Label>Name :</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.fullName}
              className={touched.fullName && errors.fullName ? "error" : null}
              />
              {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
              {touched.fullName && errors.fullName ? (
                <div className="error-message">{errors.fullName}</div>
              ): null}
          </Form.Group>
          <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
            Submit
          </BUTTON>
        </MYFORM>
      )}
      </Formik>
    </CONTAINER>
  );
}


export default TextImageSpotForm;
