import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";
const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} autoComplete="true" id={name} {...rest} />
      <ErrorMessage component={ErrorText} name={name}/>
    </div>
  );
};

export default Input;
