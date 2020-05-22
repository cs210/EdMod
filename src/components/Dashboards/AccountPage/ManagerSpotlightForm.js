// form for manager submission:
// state for type?
// or 2 buttons for 2 different forms, with popup for each
// or radio select, outside form, which shows different form depending (state-based)
// fields:
// -type -> conditional form per the type?

// -name
// -date
// type1:
  // -video
// type2:
  // -img
  // -text

// if video type:
  // name
  // video url
  // month of spotlight

// if img+text type:
  // name
  // video url
  // month of spotlight

  // Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Example = () => (
    <div>
        <h3>New Video Spotlight Form</h3>
        <Formik
            initialValues={{fullName: '', month: 'Jan', videoURL: ''}}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}>{(props: FormikProps<any>) => (
            <Form>
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
                <Field name="fullName" placeholder="John Smith" />
                <Field name="videoURL" placeholder="https://vimeo.com/263023085" />
                <button type="submit">Submit</button>
            </Form>
        )}
        </Formik>
    </div>
);

export default Example;
