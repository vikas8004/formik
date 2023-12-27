import React from 'react'

const ErrorText = (props) => {
    // console.log(props.children);
  return (
    <div className='error'>{props.children}</div>
  )
}

export default ErrorText