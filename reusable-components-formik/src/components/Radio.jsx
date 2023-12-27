import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";
const Radio = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          // console.log(field);
          return options.map((obj) => {
            return (
              <React.Fragment key={obj.key}>
                <input
                  type="radio"
                  id={obj.value}
                  className="radioInput"
                  {...field}
                  //   name attribute which required while makin radio is automatically provided by destructuring the field
                  value={obj.value}
                  checked={field.value === obj.value}
                />
                <label className="radioLabel" htmlFor={obj.value}>{obj.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
};

export default Radio;
