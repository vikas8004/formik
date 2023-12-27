import React from 'react'
import {Field,ErrorMessage} from 'formik'
import ErrorText from './ErrorText';


const Select = (props) => {
    const {label,name,options,...rest}=props;
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field as="select" name={name} id={name} {...rest}>
            {
                options.map((option)=>(<option key={option.value} value={option.value}>{option.key}</option>))
            }
        </Field>
        <ErrorMessage component={ErrorText} name={name}/>
    </div>
  )
}

export default Select