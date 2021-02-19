import React, { Component } from "react";

import CreateTask from "../CreateTask/CreateTaskApp";
import "./HomePage.css";
import ToDo from "./TaskWindow/ToDo/ToDo";
import Progress from "./TaskWindow/Progress/Progress";
import Done from "./TaskWindow/Done/Done";
import "./TaskWindow/ToDo/ToDo.css";
import "./TaskWindow/Progress/Progress.css";
import "./TaskWindow/Done/Done.css";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
toast.configure();
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: [],
      descriptionTask :""
     
    };
  }

  //   assignTask = (taskDetails) => {
  //     // var todo = [];
  //     // var progress = [];
  //     // var done = [];
  //     // for (var j = 0; j < taskDetails.length; j++) {
  //     //   if (taskDetails[j]["Status"] === "to-do")
  //     //     todo.push(taskDetails[j]);
  //     //   if (taskDetails[j]["Status"] === "in-progress")
  //     //     progress.push(taskDetails[j]);
  //     //   if (taskDetails[j]["Status"] === "done")
  //     //     done.push(taskDetails[j]);
  //     //   }
  //     //   console.log("after getting todo from main task:",todo)
  //     // let todoList = todo.map((data) => (
  //     //   <ToDo
  //     //     Task_id={data.Task_id}
  //     //     Title={data.Title}
  //     //     Team_Name={data.Team_Name}
  //     //     Description={data.Description}
  //     //     Priority={data.Priority}
  //     //     Assignee={data.Assignee}
  //     //     Reporter={data.Reporter}
  //     //     Planned_Date={data.Planned_Date}
  //     //     Status={data.Status}
  //     //   />
  //     // ));
  //     // let progressList = progress.map((data) => (
  //     //   <Progress
  //     //     Task_id={data.Task_id}
  //     //     Title={data.Title}
  //     //     Team_Name={data.Team_Name}
  //     //     Description={data.Description}
  //     //     Priority={data.Priority}
  //     //     Assignee={data.Assignee}
  //     //     Reporter={data.Reporter}
  //     //     Planned_Date={data.Planned_Date}
  //     //     Status={data.Status}
  //     //   />
  //     // ));
  //     // let doneList = done.map((data) => (
  //     //   <Done
  //     //     Task_id={data.Task_id}
  //     //     Title={data.Title}
  //     //     Team_Name={data.Team_Name}
  //     //     Description={data.Description}
  //     //     Priority={data.Priority}
  //     //     Assignee={data.Assignee}
  //     //     Reporter={data.Reporter}
  //     //     Planned_Date={data.Planned_Date}
  //     //     Status={data.Status}
  //     //   />
  //     // ));
  //     this.setState({
  //       todoTask: [...todoList],
  //       progressTask: [...progressList],
  //       doneTask: [...doneList],
  //       allTasks: [...taskDetails],
  //     });

  //     console.log("after segregating for normal task:",todo);
  //     console.log("after normal fetch of calls", this.state.allTasks);
  //     console.log("after putting inside component", this.state.todoTask);
  //   };

  handlePriority = () => {
    console.log("inside priority");
    var USER_NAME = localStorage.getItem("userName");
      var ACCESS_TOKEN = localStorage.getItem("accessToken");
    var taskDetails = [];

    var taskDetailsAPI = fetch("https://jedischoolteam3.tk/sortp/Team1", {
      headers: {
        Authorization: "JWT " + ACCESS_TOKEN,
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
               descriptionTask: "The tasks are currently sorted by Priority and shown..."
           });
        return json;
      })
      .catch((err) => console.log("Request Failed", err));
   
  };

  handleDueDate = () => {
    console.log("inside due date");
    var USER_NAME = localStorage.getItem("userName");
    var ACCESS_TOKEN = localStorage.getItem("accessToken");
    var taskDetails = [];

    var taskDetailsAPI = fetch("https://jedischoolteam3.tk/sortpd/Team1", {
      headers: {
        Authorization: "JWT " + ACCESS_TOKEN,
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
          });
        return json;
      })
      .catch((err) => console.log("Request Failed", err));
    // this.setState({
    //   allTasks: [...taskDetailsAPI],
    // });
  };

    handleFilter = (e) => {
        if (e.target.value == "Assignee") {
            console.log("inside handleFilter");
            var USER_NAME = localStorage.getItem("userName");
            var ACCESS_TOKEN = localStorage.getItem("accessToken");
            var taskDetails = [];
            console.log("https://jedischoolteam3.tk/usertask/" + USER_NAME);
            var taskDetailsAPI = fetch(
                "https://jedischoolteam3.tk/usertask/" + "sachin",
                {
                    headers: {
                        Authorization: "JWT " + ACCESS_TOKEN,
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((response) => response.json()) // convert to json
                .then((json) => {
                    taskDetails = json;
                    console.log(json);
                    console.log("normal fetching task", json);
                    //this.assignTask(json);
                    this.setState({
                      allTasks: [...json],
                      descriptionTask:
                        "Only your tasks are shown...",
                    });
                    return json;
          
                })
                .catch((err) => console.log("Request Failed", err));
            // this.setState({
            //   allTasks: [...taskDetailsAPI],
            // });
        }
        else if(e.target.value=="#"){
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
      var ACCESS_TOKEN = localStorage.getItem("accessToken");
      if (!USER_NAME) {
         window.setTimeout(function () {
           toast.danger("Kindly Login to see the contents", {
             position: toast.POSITION.TOP_CENTER,
           });
         }, 1000);
          window.location.href = "/";
      }
    var taskDetails = [];

    var taskDetailsAPI = fetch("https://jedischoolteam3.tk/task/Team1", {
      headers: {
        Authorization: "JWT " + ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // convert to json
      .then((json) => {
        taskDetails = json;
        console.log(json);
        console.log("normal fetching task from component didmount", json);
        //this.assignTask(json);
        this.setState({
          allTasks: [...json],
        });
          console.log("inside component didmount", this.state.allTasks);
        return json;
      })
      .catch((err) => console.log("Request Failed", err));
  }
    render() {
      console.log("allTasks",this.state.allTasks)
    var todo = [];
    var progress = [];
    var done = [];
        for (var j = 0; j < this.state.allTasks.length; j++) {
            //console.log(this.state.allTasks[j]);
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
        <div className="row ">
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
              <option>Filter By</option>
              <option value="#">No Filters</option>
              <option value="Assignee">Only My task</option>
            </select>
          </div>
        </div>
            <div className="text-center italic" style={{marginTop:"15px"}}>{
                this.state.descriptionTask
            }
                
        </div>

        <div className="container-lg container-sm " style={{ margin: "50px" }}>
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
                  {/* {this.state.progressTask} */}
                  <div className="text-center">{noProgressList}</div>
                  {progressList}
                </div>
              </div>
              <div class="col-md-4 col-sm-12" style={{ margin: "px" }}>
                <div class="container-new">
                  <h3 style={{ margin: "30px" }} className="text-center">
                    Done
                  </h3>
                  {/* {this.state.doneTask} */}
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
