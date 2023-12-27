import React from 'react'
import {Field,ErrorMessage} from "formik"
import ErrorText from './ErrorText';
const TextArea = (props) => {
    const {name,label,...rest}=props;
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} as={"textarea"} {...rest}/>
        <ErrorMessage component={ErrorText} name={name} className='error'/>
    </div>
  )
}

export default TextArea