import React from "react";
import { Formik } from "formik";
import "../../Form/Form.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const initialValues = {
  email: "mallikasachin@gmail.com",
  password: "",
  reenterPassword: "",
  firstName: "",
  lastName: "",
  userName: "",
  phone: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneRegex = /^\d{10}$/;

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password should be atleast 6 characters long!";
  }

  if (!values.phone) {
    errors.phone = "Phone Number is required!";
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = "Invalid Phone Number!";
  }
  if (values.password != values.reenterPassword) {
    errors.reenterPassword = "Password does not Match!";
  }
  if (!values.firstName) {
    errors.firstName = "First Name is required!";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required!";
  }
  if (!values.userName) {
    errors.userName = "Username is required!";
  }
  return errors;
};

const submitForm = (values) => {
  console.log(values);
  //alert("A form was submitted: " + this.state);
  var responseMessage = "";

  var res = fetch("http://65.0.91.167:8000/InviteeSignup/Team1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // We convert the React state to JSON and send it as the POST body
    body: JSON.stringify({
      User_Name: values.userName,
      First_Name: values.firstName,
      Last_Name: values.lastName,
      User_Email: "mallikasachin@gmail.com",
      phone_no: values.phone,
      password: values.password,
    }),
  }).then(function (response) {
    return response.json();
  });

  const printMessage = async () => {
    const a = await res;
    console.log(a.message);
    responseMessage = a.message;
    if (responseMessage === "User created successfully.") {
      //history.push('/home');
      window.location.href = "/";
    } else {
      //alert(a.message);
      toast.error(responseMessage, { position: toast.POSITION.TOP_CENTER });
    }
  };

  printMessage();
  //event.preventDefault();
};

const Signup = () => {
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
              width: "40%",
              align: "center",
              margin: "auto",
            }}
          >
            <div
              className="container-md"
              style={{
                paddingTop: "50px",
                width: "100%",
                paddingBottom: "50px",
                paddingLeft: "75px",
                paddingRight: "75px",
                marginTop: "5rem",
                height: "100%",
              }}
            >
              <h3 className="text-dark"> Sign up to continue!</h3>
              <form onSubmit={handleSubmit} style={{ marginTop: "25px" }}>
                <div className="form-row">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.firstName && touched.firstName
                        ? "input-error"
                        : null
                    }
                    required
                  />
                  {errors.firstName && touched.firstName && (
                    <span className="error">{errors.firstName}</span>
                  )}
                </div>

                <div className="form-row">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lastName && touched.lastName ? "input-error" : null
                    }
                    required
                  />
                  {errors.lastName && touched.lastName && (
                    <span className="error">{errors.lastName}</span>
                  )}
                </div>
                <div className="form-row">
                  <label htmlFor="firstName">Pick an Username</label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.userName && touched.userName ? "input-error" : null
                    }
                    required
                  />
                  {errors.userName && touched.userName && (
                    <span className="error">{errors.userName}</span>
                  )}
                </div>

                <div className="form-row">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.phone && touched.phone ? "input-error" : null
                    }
                  />
                  {errors.phone && touched.phone && (
                    <span className="error">{errors.phone}</span>
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
                <div className="form-row">
                  <label htmlFor="reenterPassword">Re-enter the Password</label>
                  <input
                    type="password"
                    name="reenterPassword"
                    id="reenterPassword"
                    value={values.reenterPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.reenterPassword && touched.reenterPassword
                        ? "input-error"
                        : null
                    }
                  />
                  {errors.reenterPassword && touched.reenterPassword && (
                    <span className="error">{errors.reenterPassword}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign Up
                </button>
                <div id="hello"></div>
                <div
                  className="row"
                  style={{ marginTop: "25px", fontSize: "25px" }}
                >
                  <div className="col-sm-4 mt-2"></div>
                  <div className="col-sm-4 right"></div>
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

export default Signup;
