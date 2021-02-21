import Modal from "react-modal";
import React, { Component } from "react";
import "./Progress.css";


class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, deleteModalIsOpen: false };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true, deleteModalIsOpen: false });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, deleteModalIsOpen: false });
  };
  openDeleteModal = () => {
    this.setState({ modalIsOpen: false, deleteModalIsOpen: true });
  };
  closeDeleteModal = () => {
    this.setState({ modalIsOpen: true, deleteModalIsOpen: false });
  };

  handleModalCloseRequest = () => {
    this.setState({ modalIsOpen: false, deleteModalIsOpen: false });
  };

  handleSaveClicked = (e) => {
    alert("Save button was clicked");
  };

  handleDelete = (e) => {
    console.log("Task_id:", this.props.Task_id);

     var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + localStorage.getItem("refreshToken"));
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

var access = fetch("https://jedischoolteam3.tk/refresh", requestOptions)
  //.then(response => response.text())
  .then((result) => {return result.json()})
  .catch(error => console.log('error', error));
const getAccess = async () => {
     const UserDetails2 = await access;
      localStorage.setItem("accessToken",UserDetails2.access_token);
    };

    getAccess();
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization","Bearer "+localStorage.getItem("accessToken"));
    e.persist();
    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,

      redirect: "follow",
    };
    console.log("https://jedischoolteam3.tk/tasks/" + this.props.Task_id);
    fetch(
      "https://jedischoolteam3.tk/tasks/" + this.props.Task_id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        window.location.reload();
      }
      )
      .catch((error) => console.log("error", error));
  };
  saveChanges = (e) => {
    console.log(this.props.Task_id);
    console.log("Status", this.state.select);
    console.log(e.target.value);
    e.persist();

     var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + localStorage.getItem("refreshToken"));
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

var access = fetch("https://jedischoolteam3.tk/refresh", requestOptions)
  //.then(response => response.text())
  .then((result) => {return result.json()})
  .catch(error => console.log('error', error));
const getAccess = async () => {
     const UserDetails2 = await access;
      localStorage.setItem("accessToken",UserDetails2.access_token);
    };

    getAccess();
  
   
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem("accessToken"))

    var raw = JSON.stringify({ Status: this.state.select });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://jedischoolteam3.tk/tasks/" + this.props.Task_id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        //window.location.reload()
        if (this.props.sortFilter) {
          console.log(" inside sortfilter")
          console.log("e",e.target.value)
           this.props.handleFilter(e);
          this.handleModalCloseRequest();
        }
        else if (this.props.sortPriority) {
          this.props.handlePriority();
          this.handleModalCloseRequest();

        }
        else if( this.props.sortDueDate) {
          this.props.handleDueDate();
          this.handleModalCloseRequest();
        }
        else {
          window.location.reload()
        }
      })
      //.catch((error) => alert("error", error));
  };
  handleSelect = (e) => {
    this.setState({ select: e.target.value });
    console.log(this.state.select);
  };

  render() {
    let priority = "";
    let iconColor = "";
    if (this.props.Priority == "3") {
      priority = "High";
      iconColor = "red";
    } else if (this.props.Priority == "2") {
      priority = "Medium";
      iconColor = "gold";
    } else if (this.props.Priority == "1") {
      priority = "Low";
      iconColor = "green";
    }
    let disabled = "";
    let disabledProgress = false;
    if (this.props.Status == "done") {
      disabled = true;
    }
    if (this.props.Status == "in-progress") {
      disabledProgress = true;
    }
    return (
      <React.Fragment>
        <Modal
          className="Modal__Bootstrap modal-dialog modal-lg"
          closeTimeoutMS={150}
          isOpen={this.state.deleteModalIsOpen}
          onRequestClose={this.closeDeleteModal}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div class="modal-content">
            <div class="modal-header">Delete Confirmation</div>
            <div class="modal-body">Are you sure to delete this task?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn-sm btn-default"
                data-dismiss="modal"
                onClick={this.closeDeleteModal}
              >
                No
              </button>
              <button
                type="button"
                class="btn-sm btn-danger"
                data-dismiss="modal"
                onClick={this.handleDelete}
                value="callback"
              >
                Yes
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          className="Modal__Bootstrap modal-dialog modal-lg"
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.Title}</h5>
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
                onClick={this.openDeleteModal}
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
                <strong>Task title </strong>: {this.props.Title}
              </div>
              <div>
                <strong>Task Due Date </strong> : {this.props.Planned_Date}
              </div>
              <div>
                <strong>Description </strong>: {this.props.Description}
              </div>
              <div>
                <strong>Assignee </strong>: {this.props.Assignee}
              </div>
              <div>
                <strong>Reporter </strong>: {this.props.Reporter}
              </div>
              <div>
                <strong>Priority </strong>: {priority}
              </div>
              <div>
                <strong>Status </strong>: &nbsp; 
                <select
                 class="drop-down"
                  name="selectComponent"
                  value={this.state.select}
                  onChange={this.handleSelect}
                >
                  <option value="to-do" disabled={disabled || disabledProgress}>
                    ToDo
                  </option>
                  <option value="in-progress" disabled={disabled}>
                    Progress
                  </option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn-sm btn-primary"
                onClick={this.saveChanges}
                value="callback"
              >
                Save changes
              </button>
            </div>
          </div>
        </Modal>
        <div
          class="card"
          onClick={this.openModal}
          style={{ margin: "10px", width: "100%" }}
        >
          <div className="card-header">
            <strong>{this.props.Title}</strong>
            <br />
            {this.props.Description}
            <i
              class="fa fa-calendar"
              aria-hidden="true"
              data-toggle="tooltip"
              title={this.props.Planned_Date}
              //title={this.props.Planned_Date}
              style={{
                display: "inline-block",
                float: "right",
                margin: "12px 12px 12px 0px",
                position: "absolute",
                bottom: "0",
                right: "0",
              }}
            ></i>
            <i
              class="fa fa-circle"
              aria-hidden="true"
              data-toggle="tooltip"
              title={priority}
              style={{
                display: "inline-block",
                float: "right",
                margin: "12px 36px 12px 0px",
                position: "absolute",
                bottom: "0",
                right: "0",
                color: iconColor,
              }}
            ></i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Progress;
