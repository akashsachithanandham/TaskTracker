import React, { Component } from "react";

import "./HomePage.css";

import Progress from "./TaskWindow/Progress/Progress";


import "./TaskWindow/Progress/Progress.css";
import constantAPI from "../../ConstantAPI/constantAPI";

import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
toast.configure();
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTasks: [],
            descriptionTask: "",
            sortPriority: false,
            sortDueDate: false,
            sortFilter: false
        };
    }

    handlePriority = () => {
        console.log("inside priority");
        var USER_NAME = localStorage.getItem("userName");
        

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
    var ACCESS_TOKEN = localStorage.getItem("accessToken");
  
        var taskDetails = [];

        var taskDetailsAPI = fetch("https://jedischoolteam3.tk/sortp/Team1", {
            headers: {
                Authorization: "Bearer " + ACCESS_TOKEN,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json()) // convert to json
            .then((json) => {
                taskDetails = json;
                console.log(json);
                console.log("Priority fetching task", json);
                //this.assignTask(json);
                this.setState({
                    allTasks: [...json],
                    descriptionTask:
                        "The tasks are currently sorted by Priority and shown...",
                    sortPriority: true,
                    sortDueDate: false,
                    sortFilter: false

                });
                return json;
            })
            .catch((err) => console.log("Request Failed", err));
    };

    handleDueDate = () => {
        console.log("inside due date");
        var USER_NAME = localStorage.getItem("userName");

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
  
        var ACCESS_TOKEN = localStorage.getItem("accessToken");
        var taskDetails = [];

        var taskDetailsAPI = fetch("https://jedischoolteam3.tk/sortpd/Team1", {
            headers: {
                Authorization: "Bearer " + ACCESS_TOKEN,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json()) // convert to json
            .then((json) => {
                taskDetails = json;
                console.log(json);
                console.log("Duedate fetching task", json);
                // this.assignTask(json);
                this.setState({
                    allTasks: [...json],
                    descriptionTask:
                        "The tasks are currently sorted by Due Date and shown...",
                    sortDueDate: true,
                    sortFilter: false,
                    sortPriority: false
                });
                return json;
            })
            .catch((err) => console.log("Request Failed", err));
    };

    handleFilter = (e) => {
        if (e.target.value == "Assignee" || e.target.value == "callback") {
            console.log(e.target.value);
            console.log("inside handleFilter");
            var USER_NAME = localStorage.getItem("userName");
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
  
            var ACCESS_TOKEN = localStorage.getItem("accessToken");
            var taskDetails = [];
            console.log("https://jedischoolteam3.tk/usertask/" + USER_NAME);
            var taskDetailsAPI = fetch(
                "https://jedischoolteam3.tk/usertask/" + USER_NAME,
                {
                    headers: {
                        Authorization: "Bearer " + ACCESS_TOKEN,
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((response) => response.json()) // convert to json
                .then((json) => {
                    taskDetails = json;
                    console.log(json);
                    console.log("normal fetching task", json);

                    this.setState({
                        allTasks: [...json],
                        descriptionTask: "Only your tasks are shown...",
                        sortFilter: true,
                        sortPriority: false,
                        sortDueDate: false,
                    });

                    return json;
                })
                .catch((err) => console.log("Request Failed", err));
        } else if (e.target.value == "#") {
            window.location.reload();
        }
       
    };
    handleSort = (e) => {
        if (e.target.value == "#") {
            window.location.reload();
        } else if (e.target.value == "Priority") {
            this.handlePriority();
        } else if (e.target.value == "Planned_Date") {
            this.handleDueDate();
        }
    };

    componentDidMount() {
        
        var USER_NAME = localStorage.getItem("userName");
        //var ACCESS_TOKEN = localStorage.getItem("accessToken");
        if (!USER_NAME) {
            window.setTimeout(function () {
                toast.danger("Kindly Login to see the contents", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }, 1000);
            window.location.href = "/";
        }
        var taskDetails = [];
        var refreshAuthToken = localStorage.getItem("refreshToken");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + refreshAuthToken);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
        };
        var r = "";

        var accessToken = fetch(constantAPI.REFRESHTOKEN_API, requestOptions)
            //.then((response) => response.text())
            .then((result) => {
                // r = result.status;
                // console.log("result status",r);
                console.log("inside component did mount", result)
                console.log(typeof(result))
                return result.json();
            }
            )
            .catch((error) => console.log("error", error));
  
  
        const getAccesstoken = async () => {
            const access = await accessToken;
            console.log("accessToken after refreshing:", access);
            console.log("printing access.accesstoken",typeof(access))
            console.log("access status", r);
            //if (r == 200) {
                const responseMessage = access.access_token;
                console.log(responseMessage);
                localStorage.setItem("accessToken", responseMessage);
                console.log("inside after refresh accesstoken",localStorage.getItem("accessToken"));
                var sessionAuthToken = localStorage.getItem("accessToken");
                var USERNAME = localStorage.getItem("userName");
                var taskDetailsAPI = fetch("https://jedischoolteam3.tk/task/Team1", {
                    headers: {
                        Authorization: "Bearer " + sessionAuthToken,
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json()) // convert to json
                    .then((json) => {
                        taskDetails = json;
                        console.log(json);
                        console.log("normal fetching task from component didmount", json);

                        this.setState({
                            allTasks: [...json],
                        });
                        console.log("inside component didmount", this.state.allTasks);
                        return json;
                    })
                    .catch((err) => console.log("Request Failed", err));
           // }
        
        }
  getAccesstoken();
    }
  


    //     var taskDetailsAPI = fetch("https://jedischoolteam3.tk/task/Team1", {
    //         headers: {
    //             Authorization: "JWT " + ACCESS_TOKEN,
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((response) => response.json()) // convert to json
    //         .then((json) => {
    //             taskDetails = json;
    //             console.log(json);
    //             console.log("normal fetching task from component didmount", json);

    //             this.setState({
    //                 allTasks: [...json],
    //             });
    //             console.log("inside component didmount", this.state.allTasks);
    //             return json;
    //         })
    //         .catch((err) => console.log("Request Failed", err));
    // }
    render() {
        console.log("allTasks", this.state.allTasks);
        var todo = [];
        var progress = [];
        var done = [];
        for (var j = 0; j < this.state.allTasks.length; j++) {
            if (this.state.allTasks[j]["Status"] === "to-do")
                todo.push(this.state.allTasks[j]);
            if (this.state.allTasks[j]["Status"] === "in-progress")
                progress.push(this.state.allTasks[j]);
            if (this.state.allTasks[j]["Status"] === "done")
                done.push(this.state.allTasks[j]);
        }
        console.log("progress inside render", progress);
        let todoList = todo.map((data) => (
          <Progress
            Task_id={data.Task_id}
            Title={data.Title}
            Team_Name={data.Team_Name}
            Description={data.Description}
            Priority={data.Priority}
            Assignee={data.Assignee}
            Reporter={data.Reporter}
            Planned_Date={data.Planned_Date}
            Status={data.Status}
            sortDueDate={this.state.sortDueDate}
            sortPriority={this.state.sortPriority}
            sortFilter={this.state.sortFilter}
            handleDueDate={this.handleDueDate}
            handleFilter={this.handleFilter}
            handlePriority={this.handlePriority}
          />
        ));
        let progressList = progress.map((data) => (
            <Progress
                Task_id={data.Task_id}
                Title={data.Title}
                Team_Name={data.Team_Name}
                Description={data.Description}
                Priority={data.Priority}
                Assignee={data.Assignee}
                Reporter={data.Reporter}
                Planned_Date={data.Planned_Date}
                Status={data.Status}
                sortDueDate={this.state.sortDueDate}
                sortPriority={this.state.sortPriority}
                sortFilter={this.state.sortFilter}
                handleDueDate={this.handleDueDate}
                handleFilter={this.handleFilter}
                handlePriority={this.handlePriority}
            />
        ));
        let doneList = done.map((data) => (
          <Progress
            Task_id={data.Task_id}
            Title={data.Title}
            Team_Name={data.Team_Name}
            Description={data.Description}
            Priority={data.Priority}
            Assignee={data.Assignee}
            Reporter={data.Reporter}
            Planned_Date={data.Planned_Date}
            Status={data.Status}
            sortDueDate={this.state.sortDueDate}
            sortPriority={this.state.sortPriority}
            sortFilter={this.state.sortFilter}
            handleDueDate={this.handleDueDate}
            handleFilter={this.handleFilter}
            handlePriority={this.handlePriority}
          />
        ));
        if (doneList.length == 0) {
            var noDoneList = "Currently no task is assigned Enjoy the day!";
        }
        if (todoList.length == 0) {
            var noTodoList = "Currently no task is assigned Enjoy the day!";
        }
        if (progressList.length == 0) {
            var noProgressList = "Currently no task is assigned Enjoy the day!";
        }
        console.log("this is progresslist inside render:", progressList);
        return (
          <div className="HomePage ">
            <div className="row " style={{ marginTop: "25px", margin: "5px" }}>
              <div
                className="col-md-2 col-sm-6 form-row "
                style={{ margin: "5px" }}
              >
                <select onClick={this.handleSort} className="form-control">
                  <option>Sort By</option>
                  <option value="#">Select</option>
                  <option value="Priority">Sort By Priority</option>
                  <option value="Planned_Date">Sort By Due Date</option>
                </select>
              </div>
              <div className="col-md-2 col-sm-6 " style={{ margin: "5px" }}>
                <select
                  onClick={this.setFilter}
                  className="form-control"
                  onClick={this.handleFilter}
                >
                  <option value="not">Filter By</option>
                  <option value="#">No Filters</option>
                  <option value="Assignee">Only My task</option>
                </select>
              </div>
            </div>
            <div className="text-center italic" style={{ marginTop: "15px" }}>
              {this.state.descriptionTask}
            </div>

            <div
              className="container-lg container-sm "
              style={{ margin: "50px" }}
            >
              <div
                class="container-lg"
                style={{ padding: "25px", backgroundColor: "#e2eafc" }}
              >
                <div class="row">
                  <div class="col-md-4 col-sm-12" style={{ margin: "px" }}>
                    <div class="container-new">
                      <h3 style={{ margin: "30px" }} className="text-center">
                        ToDo
                      </h3>
                      <div className="text-center">{noTodoList}</div>
                      {todoList}
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12" style={{ margin: "px" }}>
                    <div class="container-new">
                      <h3 style={{ margin: "30px" }} className="text-center">
                        Progress
                      </h3>

                      <div className="text-center">{noProgressList}</div>
                      {progressList}
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12" style={{ margin: "px" }}>
                    <div class="container-new">
                      <h3 style={{ margin: "30px" }} className="text-center">
                        Done
                      </h3>

                      <div className="text-center">{noDoneList}</div>
                      {doneList}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;
