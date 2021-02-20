import React, { Component } from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Form/Form.scss";

toast.configure();
var UserDetails = [];

const initialValues = {
  taskName: "",
  taskDescription: "",
  taskPriority: "",
  taskDue: "",
  taskAssignee: "",
  taskReporter: "",
  taskTeam: "Team1",
};
const isFutureDate = (idate) => {
  var today = new Date();
  var newtoday = new Date(idate);

  return today <= newtoday;
};

const validate = (values) => {
  let errors = {};

  if (!values.taskName) {
    errors.taskName = "Please Enter the Task Name!";
  }

  if (!values.taskDescription) {
    errors.taskDescription = "Please Enter the Task Description!";
  }
  if (!values.taskDue) {
    errors.taskDue = "Please Select the Task Due Date!";
  } else if (!isFutureDate(values.taskDue)) {
    errors.taskDue = "Please Select the valid Task Due Date!";
  }
  if (!values.taskAssignee) {
    errors.taskAssignee = "Please select the Task Assignee";
  }

  if (!values.taskPriority) {
    errors.taskPriority = "Please Select the Task Priority!";
  }
  if (!values.taskReporter) {
    errors.taskReporter = "Please Select the Task Reporter!";
  }

  return errors;
};
const submitForm = (values) => {
  console.log(values);

  var responseMessage = "";
  var sessionUserName = "akashs";
  var teamName = "Team1";
  var sessionAuthToken = localStorage.getItem("access_token");
  var res = fetch("https://jedischoolteam3.tk/createtask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "JWT " + sessionAuthToken,
    },
    // We convert the React state to JSON and send it as the POST body
    body: JSON.stringify({
      Title: values.taskName,
      Description: values.taskDescription,
      Priority: values.taskPriority,
      Planned_Date: values.taskDue,
      Assignee: values.taskAssignee,
      Reporter: values.taskReporter,
      Status: "to-do",
      User_Name: sessionUserName,
      Team_Name: teamName,
    }),
  }).then(function (response) {
    var statusCode = response.status;
    console.log(statusCode);
    if (statusCode == "201") {
      toast.info("Task Created Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      window.location.reload();
    }
    return response.json();
  });

  const printMessage = async () => {
    const a = await res;
    console.log(a.status);

    if (a.status == "200") {
      toast.info("Task Created Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      this.setState({ modalIsOpen: false });
    } else {
      //alert(a.message);
      toast.error(a.message, { position: toast.POSITION.TOP_CENTER });
    }
  };

  printMessage();
};

var appElement = document.getElementById("example");

Modal.setAppElement(appElement);

class CreateTaskApp extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({ modalIsOpen: false });
  };

  handleSaveClicked = (e) => {
    alert("Save button was clicked");
  };

  componentDidMount() {
    //this.setState({ loading: true });
    var UserDetails1 = fetch("https://jedischoolteam3.tk/users/Team1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("access_token"),
      },
      // We convert the React state to JSON and send it as the POST body
    }).then(function (response) {
      return response.json();
    });

    const printMessage = async () => {
      UserDetails = await UserDetails1;
      console.log(UserDetails);
    };

    printMessage();

    var UserDetails1 = fetch("https://jedischoolteam3.tk/task/Team1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "JWT " +
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTM1NDI0NTUsImlhdCI6MTYxMzU0MjE1NSwibmJmIjoxNjEzNTQyMTU1LCJpZGVudGl0eSI6MjR9.r_YM8owc3M6J62VN5PnKLPuTHKuGiPS0POZeYPd6zhI",
      },
      // We convert the React state to JSON and send it as the POST body
    }).then(function (response) {
      return response.json();
    });

    const printMessage1 = async () => {
      var Use = await UserDetails1;
      console.log(Use);
    };

    printMessage1();
  }

  render() {
    console.log(UserDetails);
    let UserList =
      UserDetails.length > 0 &&
      UserDetails.map((item) => {
        return (
          <option key={item.User_Name} value={item.User_Name}>
            {item.User_Name}
          </option>
        );
      }, this);

    return (
      <div>
        <a className=" btn-link" onClick={this.openModal}>
          Create Task
        </a>
        <Modal
          className="Modal__Bootstrap modal-dialog modal-lg"
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Create Task!</h4>
              <button
                type="button"
                className="close"
                onClick={this.handleModalCloseRequest}
              >
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div
              className="modal-body"
              style={{
                "max-height": "calc(100vh - 210px)",
                "overflow-y": "auto",
              }}
            >
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
                      className="container-md"
                      style={{
                        paddingTop: "50px",
                        paddingBottom: "50px",
                        paddingLeft: "75px",
                        paddingRight: "75px",

                        height: "100%",
                      }}
                    >
                      {/* <h3>Create Task!</h3> */}

                      <form onSubmit={handleSubmit}>
                        <div className="form-row">
                          <label htmlFor="taskName">Task Name</label>
                          <input
                            type="text"
                            name="taskName"
                            id="taskName"
                            value={values.taskName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.taskName && touched.taskName
                                ? "input-error"
                                : null
                            }
                            required
                          />
                          {errors.taskName && touched.taskName && (
                            <span className="error">{errors.taskName}</span>
                          )}
                        </div>

                        <div className="form-row">
                          <label htmlFor="taskDesctiption">
                            Task Description
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            type="text"
                            name="taskDescription"
                            id="taskDescription"
                            value={values.taskDescription}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.taskDescription && touched.taskDescription
                                ? "input-error"
                                : null
                            }
                            required
                          ></textarea>
                          {errors.taskDescription &&
                            touched.taskDescription && (
                              <span className="error">
                                {errors.taskDescription}
                              </span>
                            )}
                        </div>
                        <div className="form-row">
                          <label htmlFor="taskPriority">Task Priority</label>
                          <select
                            class="form-control"
                            aria-label="Default select example"
                            name="taskPriority"
                            id="taskPriority"
                            value={values.taskPriority}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.taskPriority && touched.taskPriority
                                ? "input-error"
                                : null
                            }
                            required
                          >
                            <option value="" disabled>
                              Please select
                            </option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                          </select>
                          {errors.taskPriority && touched.taskPriority && (
                            <span className="error">{errors.taskPriority}</span>
                          )}
                        </div>

                        <div className="form-row">
                          <label htmlFor="taskDue">Task Due Date</label>
                          <input
                            className="form-control"
                            type="date"
                            name="taskDue"
                            id="taskDue"
                            value={values.taskDue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.taskDue && touched.taskDue
                                ? "input-error"
                                : null
                            }
                          />
                          {errors.taskDue && touched.taskDue && (
                            <span className="error">{errors.taskDue}</span>
                          )}
                        </div>
                        <div className="form-row">
                          <label htmlFor="taskAssignee">Select Assignee</label>
                          <select
                            class="form-control"
                            name="taskAssignee"
                            id="taskAssignee"
                            value={values.taskAssignee}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.taskAssignee && touched.taskAssignee
                                ? "input-error"
                                : null
                            }
                            required
                          >
                            <option value="" selected disabled>
                              Please select
                            </option>

                            {UserList}
                          </select>
                          {errors.taskAssignee && touched.taskAssignee && (
                            <span className="error">{errors.taskAssignee}</span>
                          )}
                        </div>
                        <div className="form-row">
                          <label htmlFor="taskReporter">Select Reporter</label>
                          <select
                            class="form-control"
                            name="taskReporter"
                            id="taskReporter"
                            value={values.taskReporter}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.taskReporter && touched.taskReporter
                                ? "input-error"
                                : null
                            }
                            required
                          >
                            <option value="" selected disabled>
                              Please select
                            </option>

                            {UserList}
                          </select>
                          {errors.taskReporter && touched.taskReporter && (
                            <span className="error">{errors.taskReporter}</span>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="btn btn-sm"
                          className={!(dirty && isValid) ? "disabled-btn" : ""}
                          disabled={!(dirty && isValid)}
                        >
                          Create
                        </button>
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
                  );
                }}
              </Formik>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateTaskApp;
