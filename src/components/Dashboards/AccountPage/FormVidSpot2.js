// NOTE: this form contains a sometimes-bug, where sometimes the form doesn't submit
// I'm tired of fiddling with these libraries, so see FormVidSpot3

import React, { Component } from 'react';
import firebase from 'firebase';

import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class FormVidSpot extends Component {
  constructor() {
    super();
    this.resetForm = this.resetForm.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      fullName: 'John Smith',
      month: 'Jan',
      type:'video',
      videoURL: 'https://vimeo.com/148751763'
    };
  }

  resetForm = () => {
    this.setState({
      fullName: 'John Smith',
      month: 'Jan',
      type:'video',
      videoURL: 'https://vimeo.com/148751763'
    })
    alert("reset form!", null, 2);
  }

  onFormSubmit = () => {
    firebase.firestore().collection("spotlights").doc(this.state.month).set(this.state)
      .then(() => {
        alert("Document successfully written!", null, 2);
        this.resetForm()
      })
      .catch((error) => {
        alert("Error writing document" + error, null, 2)
        this.resetForm()
      });

  }

  render() {
    return (
      <Container className="p-5">
        <h3> New Video Spotlight Form </h3>
        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="text"
              placeholder="Name"
              value={this.state.fullName}
              onChange={e => this.setState({ fullName: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Month</Label>
            <Input
              type="select"
              name="month"
              id="monthSelect"
              value={this.state.month}
              onChange={e => this.setState({ month: e.target.value })}
            >
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Video URL:</Label>
            <Input
              type="text"
              name="videoURL"
              placeholder="Vimeo URL"
              value={this.state.videoURL}
              onChange={e => this.setState({ videoURL: e.target.value })}
            />
          </FormGroup>
          <Button type="submit" color="primary">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default FormVidSpot;
// render(<FormVideoSpotlight />, document.getElementById('root'));


// import React from 'react';
// import firebase from 'firebase';
// import {
//   Grid,
//   Box,
//   Typography,
//   Button
// }
// from '@material-ui/core';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
//
// const onSubmit = {(values, actions) => {
//   firebase.firestore().collection("spotlights").doc(values.month).set(values)
//     .then(function() {
//       alert("Document successfully written!", null, 2);
//     })
//     .catch(function(error) {
//       alert("Error writing document" + error, null, 2)
//     });
// }};
//
// const FormVideoSpotlight = () => (
//   <div>
//     <h3>New Video Spotlight Form</h3>
//       <Formik
//         initialValues={{fullName: 'John Smith', month: 'Jan', type:'video', videoURL: 'https://vimeo.com/148751763'}}
//         onSubmit={onSubmit}>{(props: FormikProps<any>) => (
//         <Form>
//           <Field name="fullName" placeholder="John Smith" />
//           <Field as="select" name="month">
//               <option value="Jan">Jan</option>
//               <option value="Feb">Feb</option>
//               <option value="Mar">Mar</option>
//               <option value="Apr">Apr</option>
//               <option value="May">May</option>
//               <option value="Jun">Jun</option>
//               <option value="Jul">Jul</option>
//               <option value="Aug">Aug</option>
//               <option value="Sep">Sep</option>
//               <option value="Oct">Oct</option>
//               <option value="Nov">Nov</option>
//               <option value="Dec">Dec</option>
//           </Field>
//           <Field name="videoURL" placeholder="https://vimeo.com/263023085" />
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );
//
// export default FormVideoSpotlight;
