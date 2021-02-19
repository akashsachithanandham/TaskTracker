// import React , {Component} from 'react';
// import './Done.css'
// class Done extends Component{
//     render(){
//         return <div class = "container">
//         <div class="container-fluid">
//             Done
//         </div>
//         </div>;
//     }
// }
// export default Done;

import React, { Component } from "react";

import "./Done.css";
class Done extends Component {
  constructor(props) {
    super(props);
    var priority = "";
    if (this.props.Priority == "3") {
      priority = "Low";
    } else if (this.props.Priority == "2") {
      priority = "Medium";
    } else if (this.props.Priority == "1") {
      priority = "High";
    }
    this.state = {
        taskbutton: false,
        Task_id:this.props.Task_id,
      Title: this.props.Title,
      Team_Name: this.props.Team_Name,
      Description: this.props.Description,
      Assignee: this.props.Assignee,
      Reporter: this.props.Reporter,
      Planned_Date: this.props.Planned_Date,
      Status: this.props.Status,
      Priority: priority,
    };
    this.taskInfo = this.taskInfo.bind(this);
    this.CloseCard = this.CloseCard.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  taskInfo() {
    this.setState({
        taskbutton: true,
        ...this.state.Task_id,
      ...this.state.Team_Name,
      ...this.state.Title,
      ...this.state.Description,
      ...this.state.Assignee,
      ...this.state.Reporter,
      ...this.state.Planned_Date,
      ...this.state.Status,
      ...this.state.Priority,
    });
  }
  CloseCard() {
    this.setState({
      taskbutton: false,
      ...this.state.Task_id,
      ...this.state.Title,
      ...this.state.Team_Name,
      ...this.state.Description,
      ...this.state.Assignee,
      ...this.state.Reporter,
      ...this.state.Planned_Date,
      ...this.state.Status,
      ...this.state.Priority,
    });
  }
  changeStatus() {
    this.setState({
      ...this.state.taskbutton,
      ...this.state.Title,
      ...this.state.Task_id,
      ...this.state.Team_Name,
      ...this.state.Description,
      ...this.state.Assignee,
      ...this.state.Reporter,
      ...this.state.Planned_Date,
      Status: "finish",
    });
  }
  handleDelete = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,

      redirect: "follow",
    };
    console.log("http://13.232.149.111:8000/tasks/" + this.state.Task_id);
    fetch(
      "http://13.232.149.111:8000/tasks/" + this.state.Task_id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => window.location.reload())
      .catch((error) => console.log("error", error));
  };
  saveChanges() {
    this.setState({
      taskbutton: false,
      ...this.state.Team_Name,
      ...this.state.Title,
      ...this.state.Description,
      ...this.state.Assignee,
      ...this.state.Reporter,
      ...this.state.Planned_Date,
      ...this.state.Status,
      ...this.state.Priority,
    });
    console.log(this.state.Status);
  }

  render() {
    if (this.state.taskbutton == true) {
        return (
          <div>
            <div
              class="modal fade"
              id="confirm-delete"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">Delete Confirmation</div>
                  <div class="modal-body">
                    Are you sure to delete this task?
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn-sm btn-default"
                      data-dismiss="modal"
                    >
                      No
                    </button>
                    <button
                      type="button"
                      class="btn-sm btn-danger"
                      data-dismiss="modal"
                      onClick={this.handleDelete}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle1">
                  {this.state.Title}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.CloseCard}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {/* <a
                  href="#"
                  style={{
                    display: "inline-block",
                    float: "right",
                    margin: "12px 12px 0px 0px",
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                  }}
                  data-toggle="modal"
                  data-target="#confirm-delete"
                > 
                  <span class="glyphicon glyphicon-trash"></span>
                </a>*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                  style={{
                    display: "inline-block",
                    float: "right",
                    margin: "12px 12px 0px 0px",
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                  }}
                  data-toggle="modal"
                  data-target="#confirm-delete"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                <div>
                  <strong>Task title </strong>: {this.state.Title}
                </div>
                <div>
                  <strong>Task Due Date </strong> : {this.state.Planned_Date}
                </div>
                <div>
                  <strong>Description </strong>: {this.state.Description}
                </div>
                <div>
                  <strong>Assignee </strong>: {this.state.Assignee}
                </div>
                <div>
                  <strong>Reporter </strong>: {this.state.Reporter}
                </div>
                <div>
                  <strong>Priority </strong>: {this.state.Priority}
                </div>
                <div>
                  <strong>Status</strong> : &nbsp;
                  <select class="drop-down">
                    <option value="ToDo" active>
                      ToDo
                    </option>
                    <option value="in-progress">Progress</option>
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn-sm btn-secondary"
                  data-dismiss="modal"
                  onClick={this.CloseCard}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn-sm btn-primary"
                  onClick={this.saveChanges}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        );
    } else {
      return (
        <React.Fragment>
          
          <div
            className="card"
            onClick={this.taskInfo}
            style={{ margin: "10px" }}
            style={{ margin: "10px", width: "100%" }}
          >
            <div className="card-header">
              <strong>{this.state.Title}</strong>
              <br />
              {this.state.Description}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Done;