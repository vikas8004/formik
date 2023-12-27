import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const FormikContainer = () => {
  const options = [
    { key: "select an option", value: "" },
    { key: "Option1", value: "option1" },
    { key: "Option2", value: "option2" },
    { key: "Option3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option1", value: "rOption1" },
    { key: "Option2", value: "rOption2" },
    { key: "Option3", value: "rOption3" },
  ];
  const checkboxOptions = [
    { key: "Option1", value: "cOption1" },
    { key: "Option2", value: "cOption2" },
    { key: "Option3", value: "cOption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectedOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const onSubmit = (values,opt) => {
    console.log(values,opt);
    opt.resetForm(initialValues)
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("enter a valid email address").required("email is required"),
    description: Yup.string().required("comment is required"),
    selectedOption: Yup.string().required("select an option"),
    radioOption: Yup.string().required("choose one radio"),
    checkboxOption: Yup.array().required("select any one checkbox"),
    birthDate: Yup.string().required("dob is required").nullable(),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        // console.log(formikProps);
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl
              control="textarea"
              name="description"
              label="Comments"
            />
            <FormikControl
              options={options}
              name="selectedOption"
              label="Choose any one"
              control="select"
            />
            <FormikControl
              options={radioOptions}
              name="radioOption"
              label="Choose any one"
              control="radio"
            />
            <FormikControl
              options={checkboxOptions}
              name="checkboxOption"
              label="Choose checkbox/s"
              control="checkbox"
            />
            <FormikControl name="birthDate" label="BirthDate" control="date" />
            <button type="submit" disabled={(!formikProps.isValid)}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
