import React from "react";
import { Formik } from "formik";
// import { Link } from "react-router";
//import AppRegister from "./AppRegister";

import "../../Form/Form.scss";


const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }

  return errors;
};

const submitForm = (values) => {
  console.log(values);
};

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <div style={{ display: "flex", width:"30%", align:"center",margin:"auto" }}>
            <div
              className=" container text-wrap"
              style={{
                paddingTop: "50px",
                paddingBottom: "50px",
                paddingLeft: "75px",
                paddingRight: "75px",
                marginTop: "5rem",
                height: "100%",
              }}
            >
              <h3 className="text-dark" style={{ marginBottom: "50px" }}>
                Sign in to continue!
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="form-row">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign In
                </button>
                <div
                  className="row"
                  style={{ marginTop: "25px", fontSize: "25px" }}
                >
                  <div className="col-sm-4 mt-2"></div>
                  <div className="col-sm-4 right">
                    {/* <Link to="/register" > Register </Link> */}
                    <a href="/signup">Register</a>
                  </div>
                  <div className="col-sm-4 mt-2"></div>
                </div>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
          
  );
};

export default Login;
