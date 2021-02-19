import React from "react";
import { Formik } from "formik";
import { Col } from "react-bootstrap";
// import { Link } from "react-router";
//import AppRegister from "./AppRegister";
import "../../Form/Form.scss";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure(); 
const initialValues = {
  Username: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.Username) {
    errors.Username = "Username is required";
  // } else if (!regex.test(values.Username)) {
  //   errors.Username = "Invalid Username";
    
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
  //alert("A form was submitted: " + this.state);
  var responseStatus = "";
 
  var res = fetch("http://13.232.149.111:8000/auth", {
    method: "POST",
    
    headers: {
      "Content-Type": "application/json",
      
    },
    // We convert the React state to JSON and send it as the POST body
    body: JSON.stringify({
      username: values.Username,
      password: values.password,
    }),
  }).then(function (response) {
    //var responseJSON;
    //console.log(response);
    const responseJSON = response.json();
    console.log(responseJSON);
    responseStatus = response.status;
    // if (responseStatus == "200") {
    //   console.log(responseStatus);
    //   window.location.href = "/home";
    // }
    // else {
    //   console.log(response);
    //   //responseJSON = response.json();
    //   alert(response.description);
    // }
    return responseJSON;
  });

  const printMessage = async () => {
    // console.log(responseStatus);
    // console.log(typeof (responseStatus));
    // if (responseStatus == "200") {
    const accessToken = await res;
    console.log(responseStatus);
    if(responseStatus ==200){
      //console.log(a.message);
      const responseMessage = accessToken.access_token;
      console.log(responseMessage);
      localStorage.setItem("accessToken", responseMessage);
      localStorage.setItem("userName", values.Username);
      console.log(localStorage.getItem("accessToken"));
      console.log(localStorage.getItem("userName"));
      window.location.href = "/home";
    }
    else {
      const responseMessage = accessToken.description;
      console.log(responseMessage);
      toast.error(responseMessage, { position: toast.POSITION.TOP_CENTER });  
     // alert(responseMessage);
    }
  };
    // if (responseMessage === "User created successfully.") {
    //   //history.push('/home');
    //   window.location.href = "/";
    // } else {
    //   alert(a.message);
    // }
  

  printMessage();
  //event.preventDefault();
};

// const submitForm = (values) => {
//   console.log(values);
// };

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
            <div
              style={{
                display: "flex",
                width: "30%",
                align: "center",
                margin: "auto",
              }}
            >
              <div
                className=" container-md text-wrap justify-content-center"
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
                    <label htmlFor="Username">Username</label>
                    <input
                      type="text"
                      name="Username"
                      id="Username"
                      value={values.Username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.Username && touched.Username
                          ? "input-error"
                          : null
                      }
                    />
                    {errors.Username && touched.Username && (
                      <span className="error">{errors.Username}</span>
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
                        errors.password && touched.password
                          ? "input-error"
                          : null
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
                    className="row float-right "
                    style={{ marginTop: "15px", fontSize: "25px" }}
                  >
                    {/* <div className="col-sm-4 mt-2"></div>
                  <div className="col-sm-4 right"> */}
                    {/* <Link to="/register" > Register </Link> */}
                    <div className="justify-content-center align-items-center ">
                      <Link
                        className="btn-lg btn-link float-right"
                        role="button"
                        to="/signup"
                      >
                        Create Account
                      </Link>
                      <div style={{ clear: "both" }} />
                    </div>
                    {/* <a href="/signup" className="text-center btn-link btn-xl">
                      Register!
                    </a> */}
                  </div>
                  <div className="col-sm-4 mt-2"></div>
                  {/* </div> */}
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    
  );
};

export default Login;
