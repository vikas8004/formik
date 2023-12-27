import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";

const Checkbox = (props) => {
  const { name, label, options, ...rest } = props;
  return <div>
    <label >{label}</label>
    <Field name={name} {...rest}>
        {({ field }) =>{
    return options.map(obj=>{
        return <React.Fragment key={obj.key}>
            <input type="checkbox" id={obj.value} {...field} value={obj.value} checked={field.value.includes(obj.value)}/>
            <label htmlFor={obj.value}>{obj.key}</label>
        </React.Fragment>
    })
        } }
    </Field>
    <ErrorMessage component={ErrorText} name={name}/>
  </div>;
};

export default Checkbox;
