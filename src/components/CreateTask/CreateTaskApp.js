import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import { Formik } from "formik";

import "../../Form/Form.scss";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const initialValues = {
  taskName: "",
  taskDescription: "",
  taskPriority: "",
  taskDue: "",
  taskAssignee: "",
  taskReporter: "",
};
const isFutureDate = (idate) => {
  var today = new Date();
  var newtoday = new Date(idate)
    
  //   idate = idate.split("/");

  // idate = new Date(idate[2], idate[0] - 1, idate[1]).getTime();
  return today < newtoday;
};


const validate = (values) => {
  let errors = {};
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  // const phoneRegex = /^\d{10}$/;

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

  render() {
    return (
      <div>
        <button
          type="button"
          style={{ marginTop: "25px" }}
          className="btn btn-primary"
          onClick={this.openModal}
        >
          Open Modal
        </button>
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
                      className="container"
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
                            //type="text"
                            //multiple
                            class="form-control"
                            //className="form-select"
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
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                          </select>
                          {errors.taskPriority && touched.taskPriority && (
                            <span className="error">{errors.taskPriority}</span>
                          )}
                        </div>

                        <div className="form-row">
                          <label htmlFor="password">Task Due Date</label>
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
                            // aria-label="Default select example"
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
                            <option value="Akash">Akash</option>
                            <option value="Balaji">Balaji</option>
                            <option value="Girish">Girish</option>
                          </select>
                          {errors.taskAssignee && touched.taskAssignee && (
                            <span className="error">{errors.taskAssignee}</span>
                          )}
                        </div>
                        <div className="form-row">
                          <label htmlFor="taskReporter">Select Reporter</label>
                          <select
                            class="form-control"
                            //aria-label="Default select example"
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
                            <option value="Sanjay">Sanjay</option>
                            <option value="Buvan">Buvan</option>
                            <option value="Mithun">Mithun</option>
                          </select>
                          {errors.taskReporter && touched.taskReporter && (
                            <span className="error">{errors.taskReporter}</span>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="btn-sm"
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
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.handleModalCloseRequest}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSaveClicked}
              >
                Save changes
              </button>
            </div> */}
          </div>
        </Modal>
      </div>
    );
  }
}


export default CreateTaskApp;
