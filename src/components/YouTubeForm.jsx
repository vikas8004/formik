import React from "react";
import { Formik, Field, ErrorMessage, Form, FieldArray } from "formik";
import ErrorText from "./ErrorText";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
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
const validateComment = (value) => {
  //here the value of value is automatically get by the component on which it is present.
  let error;
  if (!value) {
    error = "comment is required";
  }
  return error;
};
const YouTubeForm = () => {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validate,
  // });
  //? here the returned object helps with the three things
  //? 1->managing the form states
  //? 2->handling form submission
  //? 3->validation and error message

  //?formik.errors object contains all the error related messages
  //? formik.touched object keeps the track of all the input fields whether it has been visited or not.
  //   console.log(formik.touched);
  //   console.log(formik.errors);
  //   console.log(formik.values);
  // console.log(formik.getFieldHelpers("email"));
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {/* here formik is like a context provider whose value can be accessed in all of its childrens. */}
        <Form>
          {/* the main advantage of using formik form component is that onSubmit handler is attached internally  */}
          <div>
            <label htmlFor="name">Name</label>
            <Field
              // using formik field make all the three props available which we were giving either manually or by {...formik.getFieldProps("name")}
              //here field renders an input element and hooks up with formik
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              // {...formik.getFieldProps("name")}
              //formik. getFieldProps('') in React , It is used as an alternative for handleChange & handleBlur with value in React. You don't need to use handleChange & handleBlur , when you are using getFieldProps this thing also known as reducing boilerplate
            />
            {/* {formik.errors.name ? (
            <div className="error">
              {formik.touched.name && formik.errors.name}
            </div>
          ) : null} */}
            <ErrorMessage name="name" component={ErrorText} />
            {/* the formik errorMessage component allows you to get rid of making comparison manually for validation for eg it keeps track of the touched object and on the basis of the provided name as props it shows the error and validation message. 
            =>while showing the errormessage using errormessage component the message is a plain text node it is not wrapped within any html tag u have to do it
            =>we can use component prop to do it. we can pass it a component too. but keep in mind that u don't have to call it like a normal component u just have to give it's name.
            */}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              // {...formik.getFieldProps("email")}
            />
            {/* {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null} */}
            {/* for errors u can use render prop method too */}
            <ErrorMessage name="email">
              {(errmsg) => {
                //here errmsg contains the error msg.
                return <div className="error">{errmsg}</div>;
              }}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="channel">Channel</label>
            <Field
              type="text"
              name="channel"
              id="channel"
              placeholder="enter your channel name"
              // {...formik.getFieldProps("channel")}
            />
            {/* {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null} */}
            <ErrorMessage name="channel" />
          </div>
          <div>
            <label htmlFor="comments">Comments</label>
            <Field
              name="comments"
              placeholder="enter your comments"
              id="comments"
              as="textarea"
              validate={validateComment}
              // as props tell the type of the component which u want to render
            />
            <ErrorMessage name="comments" component={ErrorText} />
          </div>
          <div>
            <label htmlFor="facebook">Facebook</label>
            <Field
              name="social.facebook"
              placeholder="enter your profile link"
              id="facebook"
            />
          </div>
          <div>
            <label htmlFor="twitter">Twitter</label>
            <Field
              name="social.twitter"
              placeholder="enter your profile link"
              id="twitter"
            />
          </div>
          <div>
            <label htmlFor="firstPhone">Primary Number</label>
            <Field
              name="phoneNumbers[0]"
              placeholder="enter first phone"
              id="firstPhone"
            />
          </div>
          <div>
            <label htmlFor="secondPhone">Secondary Number</label>
            <Field
              name="phoneNumbers[1]"
              placeholder="enter second phone"
              id="secondPhone"
            />
          </div>
          <div>
            <label htmlFor="phNumbers">PhNumbers</label>
            <FieldArray name="phNumbers">
              {(fieldProps) => {
                // console.log(fieldProps);
                const { form, push, remove } = fieldProps;
                const { values } = form;
                const { phNumbers } = values;
                return (
                  <div>
                    {phNumbers.map((el, i) => (
                      <div key={i}>
                        <Field name={`phNumbers${i}`} />
                        {i > 0 && (
                          <button type="button" onClick={() => remove(i)}>
                            -
                          </button>
                        )}
                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default YouTubeForm;
