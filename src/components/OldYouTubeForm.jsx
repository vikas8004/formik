import React from "react";
import { useFormik } from "formik";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  // here values is the equal to the formik.values which is received by default
  console.log(values);
};
const validate = (values) => {
  /*
      there are three condition for validation function
      =>the method should return an object
      =>the keys of this method should be same as the name attribute of the input field or u can say that same as the intialvalues
      =>the values for the keys should be the string descripting the error message which u want to  pass.
      */
  const error = {};
  if (!values.name) {
    error.name = "Name is required";
  }
  if (!values.email) {
    error.email = "Email id is Required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)
  ) {
    error.email = "invalid email format";
  }

  if (!values.channel) {
    error.channel = "channel is required";
  }

  return error;
};
const OldYouTubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  //? here the returned object helps with the three things
  //? 1->managing the form states
  //? 2->handling form submission
  //? 3->validation and error message

  //?formik.errors object contains all the error related messages
  //? formik.touched object keeps the track of all the input fields whether it has been visited or not.
  //   console.log(formik.touched);
  //   console.log(formik.errors);
  //   console.log(formik.values);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name ? (
            <div className="error">
              {formik.touched.name && formik.errors.name}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default OldYouTubeForm;
