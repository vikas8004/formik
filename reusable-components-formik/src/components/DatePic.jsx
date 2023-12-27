import { ErrorMessage, Field } from "formik";
import React from "react";
import DateView from "react-datepicker";
import ErrorText from "./ErrorText";
import "react-datepicker/dist/react-datepicker.css";
const DatePic = (props) => {
  const { name, label } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default DatePic;
