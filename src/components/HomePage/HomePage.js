// // import React, { Component } from "react";
// // import TaskWindow from "../TaskWindow/TaskWindowApp";
// // import CreateTask from "../CreateTask/CreateTaskApp";
// // import "./HomePage.css";

// // class Home extends Component {
// //   render() {
// //     return (
// //       <div className="HomePage">
// //         <div class="container-bar">
// //           <CreateTask />
// //           <br></br>
// //         </div>

// //         <TaskWindow />
// //       </div>
// //     );
// //   }
// // }

// // export default Home;

// import React, { Component } from "react";
// //import TaskWindow from './TaskWindow/TaskWindow';
// import CreateTask from "../CreateTask/CreateTaskApp";
// import "./HomePage.css";
// import ToDo from "./TaskWindow/ToDo/ToDo";
// import Progress from "./TaskWindow/Progress/Progress";
// import Done from "./TaskWindow/Done/Done";
// import "./TaskWindow/ToDo/ToDo.css";
// import "./TaskWindow/Progress/Progress.css";
// import "./TaskWindow/Done/Done.css";
// //import axios from "axios";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sortbutton: false,
//       Team_Name: "",
//       taskbutton: false,
//       sortArr: [],
//       descriptions: [],
//     };
//     this.setSortType = this.setSortType.bind(this);
//     //this.taskInfo = this.taskInfo.bind(this);
//     this.revertBack = this.revertBack.bind(this);
//   }

//   componentDidMount() {
//     var USER_NAME = "";
//     var ACCESS_TOKEN =
//       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTM1NjU4ODAsImlhdCI6MTYxMzU2NTU4MCwibmJmIjoxNjEzNTY1NTgwLCJpZGVudGl0eSI6MjR9.WDNy2zoldnKSDw9q1D4zkxJk_nxpEqrzs5UpBY_e6JI";
//     var UserDetails1 =  fetch("http://13.232.149.111:8000/task/Team1", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         //Authorization: "JWT " + ACCESS_TOKEN,
//       },
//       // We convert the React state to JSON and send it as the POST body
//     }).then(function (response) {
//       return response.json();
//     });

//     const printMessage = async () => {
//       var UserDetails = await UserDetails1;
//       console.log(UserDetails);
//       this.setState({
//         descriptions: [...this.state.descriptions, ...UserDetails]
//       });
//       console.log(this.state);
//     };

//     printMessage();
    
//   }

//   revertBack() {
//     this.setState({
//       ...this.state.descriptions,
//       sortbutton: false,
//       //filterbutton : false
//     });
//   }
//   setFilter(data) {
//     if (data.target.value != "#") {
//       this.setState({
//         ...this.state.descriptions,
//         ...this.state.sortArr,
//         sortbutton: false,
//         filterbutton: true,
//       });
//       var user = this.state.descriptions.filter((username) => {
//         return username.Assignee === "test";
//       });

//       this.setState({
//         filterArr: [...this.state.filterArr, user],
//       });
//     } else {
//       this.setState({
//         sortbutton: false,
//         filterbutton: false,
//         ...this.state.descriptions,
//         ...this.state.sortArr,
//       });
//       //this.render()
//     }
//   }

//   setSortType(data) {
//     if (data.target.value != "#") {
//       this.setState({
//         ...this.state.descriptions,
//         ...this.state.sortArr,
//         sortbutton: true,
//         // filterbutton : false
//       });
//       let sorted = [];
//       console.log(data.target.value);
//       if (data.target.value === "Priority")
//         sorted = [...this.state.descriptions].sort(
//           (a, b) => a[data.target.value] - b[data.target.value]
//         );
//       else if (data.target.value === "Planned_Date") {
//         sorted = [...this.state.descriptions].sort(
//           (a, b) => new Date(a["Planned_Date"]) - new Date(b["Planned_Date"])
//         );
//         console.log(sorted);
//       }

//       this.setState({
//         ...this.state.descriptions,
//         ...this.state.sortbutton,
//         //  ...this.state.filterbutton,
//         sortArr: [this.state.sortArr, ...sorted],
//       });
//     } else {
//       this.setState({
//         sortbutton: false,
//         //filterbutton:false,
//         ...this.state.descriptions,
//         ...this.state.sortArr,
//       });
//       //this.render()
//     }
//   }

//   render() {
//     if (this.state.sortbutton == true && this.state.filterbutton == false) {
//       //API Call

//       var todo = [];
//       var progress = [];
//       var done = [];
//       for (var i = 0; i < this.state.sortArr.length; i++) {
//         if (this.state.sortArr[i]["Status"] === "to-do")
//           todo.push(this.state.sortArr[i]);
//         if (this.state.sortArr[i]["Status"] === "in-progress")
//           progress.push(this.state.sortArr[i]);
//         if (this.state.sortArr[i]["Status"] === "done")
//           done.push(this.state.sortArr[i]);
//       }

//       console.log(todo[1]);
//       // console.log("Progress"+progress)
//       // console.log("Done:"+ done)
//       // console.log(this.state.descriptions)
//       let todolist = todo.map((data) => (
//         <ToDo
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let progresslist = progress.map((data) => (
//         <Progress
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let donelist = done.map((data) => (
//         <Done
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       console.log("The list>>" + todolist[0]);

//       return (
//         <div className="HomePage">
//           <div class="container-bar">
//             <CreateTask />
//           </div>
//           <div className="container-lg">
//             <div className="d-flex justify-content-end align-items-stretch">
//               <div class="container-big">
//                 <button className="btn btn-lg" onClick={this.revertBack}>
//                   Back
//                 </button>
//                 <div class="row">
//                   <div class="col">
//                     <div class="container-new">
//                       ToDo
//                       {todolist}
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="container-new">
//                       Progress
//                       {progresslist}
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="container-new">
//                       Done
//                       {donelist}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else if (this.state.sortbutton = false ) {
//       var todo1 = [];
//       var progress1 = [];
//       var done1 = [];
//       console.log("description:", this.state.description);
//       for (var j = 0; j < this.state.descriptions.length; j++) {
//         if (this.state.descriptions[j]["Status"] === "to-do")
//           todo1.push(this.state.descriptions[j]);
//         if (this.state.descriptions[j]["Status"] === "in-progress")
//           progress1.push(this.state.descriptions[j]);
//         if (this.state.descriptions[j]["Status"] === "done")
//           done1.push(this.state.descriptions[j]);
//       }
//       //console.log("Entire thing is rendered!");
//       // console.log("Todogh:" + todo1);
//       // console.log("Progress"+progress)
//       // console.log("Done:"+ done)
//       // console.log(this.state.descriptions)
//       let todolist1 = todo1.map((data) => (
//         <ToDo
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let progresslist1 = progress1.map((data) => (
//         <Progress
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let donelist1 = done1.map((data) => (
//         <Done
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));

//       return (
//         <div className="HomePage">
//           <div class="container-bar">
//             <CreateTask />
//           </div>
//           <div className="container-lg">
//             <div className="d-flex justify-content-end align-items-stretch">
//               <select onClick={this.setSortType}>
//                 <option value="#">Sort By</option>
//                 <option value="Priority">Sort By Priority</option>
//                 <option value="Planned_Date">Sort By Due date</option>
//               </select>

//               <select onClick={this.setSortType}>
//                 <option value="#">Filter by</option>
//               </select>
//             </div>

//             <div class="container-big">
//               <div class="row">
//                 <div class="col">
//                   <div class="container-new">
//                     ToDo
//                     {todolist1}
//                   </div>
//                 </div>
//                 <div class="col">
//                   <div class="container-new">
//                     Progress
//                     {progresslist1}
//                   </div>
//                 </div>
//                 <div class="col">
//                   <div class="container-new">
//                     Done
//                     {donelist1}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else if (
//       this.state.filterbutton == true &&
//       this.state.sortbutton == false
//     ) {
//       var todo1 = [];
//       var progress1 = [];
//       var done1 = [];
//       for (var k = 0; k < this.state.filterArr.length; k++) {
//         if (
//           this.state.descriptions[k]["Status"] === "to-do" &&
//           this.state.descriptions[k]["Assignee"] === "test"
//         )
//           todo1.push(this.state.descriptions[k]);
//         if (
//           this.state.descriptions[k]["Status"] === "in-progress" &&
//           this.state.descriptions[k]["Assignee"] === "test"
//         )
//           progress1.push(this.state.descriptions[k]);
//         if (
//           this.state.descriptions[k]["Status"] === "done" &&
//           this.state.descriptions[k]["Assignee"] === "test"
//         )
//           done1.push(this.state.descriptions[k]);
//       }

//       let todolist1 = todo1.map((data) => (
//         <ToDo
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let progresslist1 = progress1.map((data) => (
//         <Progress
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let donelist1 = done1.map((data) => (
//         <Done
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));

//       {
//         return (
//           <div className="HomePage">
//             <div class="container-bar">
//               <CreateTask />
//             </div>
//             <div className="container-lg">
//               <div className="d-flex justify-content-end align-items-stretch"></div>

//               <div class="container-big">
//                 <button className="btn btn-lg" onClick={this.revertBack}>
//                   Back
//                 </button>
//                 <div class="row">
//                   <div class="col">
//                     <div class="container-new">
//                       ToDo
//                       {todolist1}
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="container-new">
//                       Progress
//                       {progresslist1}
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="container-new">
//                       Done
//                       {donelist1}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       }

//       //*/
//     }
//   }
// }

// export default Home;


// import React, { Component } from "react";
// //import TaskWindow from './TaskWindow/TaskWindow';
// import CreateTask from "../CreateTask/CreateTaskApp";
// import "./HomePage.css";
// import ToDo from "./TaskWindow/ToDo/ToDo";
// import Progress from "./TaskWindow/Progress/Progress";
// import Done from "./TaskWindow/Done/Done";
// import "./TaskWindow/ToDo/ToDo.css";
// import "./TaskWindow/Progress/Progress.css";
// import "./TaskWindow/Done/Done.css";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sortbutton: false,
//       filterbutton: false,
//       sortArr: [],
//       filterArr: [],
//       descriptions: [],
//     };
//     this.setSortType = this.setSortType.bind(this);
//     this.setFilter = this.setFilter.bind(this);
//     this.taskInfo = this.taskInfo.bind(this);
//     this.revertBack = this.revertBack.bind(this);
//   }

//   componentDidMount() {
//     var USER_NAME = "";
//     var ACCESS_TOKEN =
//       "";

//     var UserDetails1 = fetch("http://13.232.149.111:8000/task/Team1", {
//       headers: {
//         Authorization: "JWT " + ACCESS_TOKEN,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           ...this.state.sortArr,
//           ...this.state.sortbutton,
//           ...this.state.taskbutton,
//           descriptions: [...this.state.descriptions, ...json],
//         });
//         console.log(json);
//       })
//       .catch((err) => console.log("Request Failed", err));
//   }

//   taskInfo() {
//     console.log("Clicked!");
//     this.setState({
//       taskbutton: true,
//       ...this.state.sortArr,
//       ...this.state.descriptions,
//       ...this.state.sortbutton,
//     });
//   }
//   revertBack() {
//     this.setState({
//       ...this.state.descriptions,
//       sortbutton: false,
//       filterbutton: false,
//     });
//   }

//   setFilter(data) {
//     if (data.target.value != "#") {
//       this.setState({
//         ...this.state.descriptions,
//         ...this.state.sortArr,
//         sortbutton: false,
//         filterbutton: true,
//       });
//       var user = this.state.descriptions.filter((username) => {
//         return username.Assignee === "Niranjan_H_B";
//       });

//       this.setState({
//         filterArr: [...this.state.filterArr, user],
//       });
//     } else {
//       this.setState({
//         sortbutton: false,
//         filterbutton: false,
//         ...this.state.descriptions,
//         ...this.state.sortArr,
//       });
//       //this.render()
//     }
//   }

//   setSortType(data) {
//     if (data.target.value != "#") {
//       this.setState({
//         ...this.state.descriptions,
//         ...this.state.sortArr,
//         sortbutton: true,
//         // filterbutton : false
//       });
//       let sorted = [];
//       console.log(data.target.value);
//       if (data.target.value === "Priority")
//         sorted = [...this.state.descriptions].sort(
//           (a, b) => a[data.target.value] - b[data.target.value]
//         );
//       else if (data.target.value === "Planned_Date") {
//         sorted = [...this.state.descriptions].sort(
//           (a, b) => new Date(a["Planned_Date"]) - new Date(b["Planned_Date"])
//         );
//         console.log(sorted);
//       }

//       this.setState({
//         ...this.state.descriptions,
//         ...this.state.sortbutton,
//         ...this.state.filterbutton,
//         sortArr: [this.state.sortArr, ...sorted],
//       });
//     } else {
//       this.setState({
//         sortbutton: false,
//         filterbutton: false,
//         ...this.state.descriptions,
//         ...this.state.sortArr,
//       });
//       //this.render()
//     }
//   }

//   render() {
//     if (this.state.sortbutton == true && this.state.filterbutton == false) {
//       //API Call

//       var todo = [];
//       var progress = [];
//       var done = [];
//       for (var i = 0; i < this.state.sortArr.length; i++) {
//         if (this.state.sortArr[i]["Status"] === "to-do")
//           todo.push(this.state.sortArr[i]);
//         if (this.state.sortArr[i]["Status"] === "in-progress")
//           progress.push(this.state.sortArr[i]);
//         if (this.state.sortArr[i]["Status"] === "done")
//           done.push(this.state.sortArr[i]);
//       }

//       console.log(todo[1]);
//       // console.log("Progress"+progress)
//       // console.log("Done:"+ done)
//       // console.log(this.state.descriptions)
//       let todolist = todo.map((data) => (
//         <ToDo
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let progresslist = progress.map((data) => (
//         <Progress
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let donelist = done.map((data) => (
//         <Done
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       console.log("The list>>" + todolist[0]);

//       return (
//         <div className="HomePage">
//           <div class="container-bar">
//             <CreateTask />
//           </div>
//           <div className="container" >
//             <div class="container" >
//               <button className="btn btn-primary" onClick={this.revertBack}>
//                 Back
//               </button>
//               <div class="row">
//                 <div class="col-md-4 col-sm-12" style={{ margin: "25px" }}>
//                   <div class="container-new">
//                     ToDo
//                     {todolist}
//                   </div>
//                 </div>
//                 <div class="col-md-4 col-sm-12" style={{ margin: "25px" }}>
//                   <div class="container-new">
//                     Progress
//                     {progresslist}
//                   </div>
//                 </div>
//                 <div class="col-md-4 col-sm-12" style={{ margin: "15px" }}>
//                   <div class="container-new">
//                     Done
//                     {donelist}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else if (
//       this.state.sortbutton == false &&
//       this.state.filterbutton == false
//     ) {
//       var todo2 = [];
//       var progress2 = [];
//       var done2 = [];
//       for (var j = 0; j < this.state.descriptions.length; j++) {
//         if (this.state.descriptions[j]["Status"] === "to-do")
//           todo2.push(this.state.descriptions[j]);
//         if (this.state.descriptions[j]["Status"] === "in-progress")
//           progress2.push(this.state.descriptions[j]);
//         if (this.state.descriptions[j]["Status"] === "done")
//           done2.push(this.state.descriptions[j]);
//       }
//       console.log("Entire thing is rendered!");
//       // console.log("Todogh:"+todo2.length+progress2.length + done2.length);
//       // console.log("Progress"+progress)
//       // console.log("Done:"+ done)
//       // console.log(this.state.descriptions)
//       let todolist2 = todo2.map((data) => (
//         <ToDo
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let progresslist2 = progress2.map((data) => (
//         <Progress
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let donelist2 = done2.map((data) => (
//         <Done
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));

//       {
//         return (
//           <div className="HomePage">
//             <div class="container-bar">
//               <CreateTask />
//             </div>
//             <div className="container-lg">
//               <div className="d-flex justify-content-end align-items-stretch">
//                 <select onClick={this.setSortType} >
//                   <option value="#">Sort By</option>
//                   <option value="Priority">Sort By Priority</option>
//                   <option value="Planned_Date">Sort By Due Date</option>
//                 </select>

//                 <select onClick={this.setFilter} style={{marginLeft:"25px"}}>
//                   <option value="#">Filter by</option>
//                   <option value="Assignee"> My task</option>
//                 </select>
//               </div></div>
//               {/* <div class="container-lg"> */}
//                 <div className="row">
//                   <div className="col-md-4 col-sm-12" style={{ margin: "10px" }}>
//                     <div className="container-new">
//                       <h5>ToDo</h5>
//                       {todolist2}
//                     </div>
//                   </div>
//                   <div className=" col-md-4 col-sm-12" style={{ margin: "10px" }}>
//                     <div className="container-new">
//                       <h5>Progress</h5>
//                       {progresslist2}
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-sm-12" style={{ margin: "10px" }}>
//                     <div className="container-new">
//                       <h5>Done</h5>
//                       {donelist2}
//                     </div>
//                   </div>
//                 </div>
//               </div>
            
          
//         );
//       }
//     } else if (
//       this.state.filterbutton == true &&
//       this.state.sortbutton == false
//     ) {
//       var todo1 = [];
//       var progress1 = [];
//       var done1 = [];
//       for (var k = 0; k < this.state.filterArr.length; k++) {
//         if (
//           this.state.descriptions[k]["Status"] === "to-do" &&
//           this.state.descriptions[k]["Assignee"] === "Niranjan_H_B"
//         )
//           todo1.push(this.state.descriptions[k]);
//         if (
//           this.state.descriptions[k]["Status"] === "in-progress" &&
//           this.state.descriptions[k]["Assignee"] === "Niranjan_H_B"
//         )
//           progress1.push(this.state.descriptions[k]);
//         if (
//           this.state.descriptions[k]["Status"] === "done" &&
//           this.state.descriptions[k]["Assignee"] === "Niranjan_H_B"
//         )
//           done1.push(this.state.descriptions[k]);
//       }

//       let todolist1 = todo1.map((data) => (
//         <ToDo
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let progresslist1 = progress1.map((data) => (
//         <Progress
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));
//       let donelist1 = done1.map((data) => (
//         <Done
//           Title={data.Title}
//           Team_Name={data.Team_Name}
//           Description={data.Description}
//           Priority={data.Priority}
//           Assignee={data.Assignee}
//           Reporter={data.Reporter}
//           Planned_Date={data.Planned_Date}
//           Status={data.Status}
//         />
//       ));

//       {
//         return (
//           <div className="HomePage">
//             <div class="container">
//               <CreateTask />
//             </div>
//             <div className="container-lg">
//               <div className="d-flex justify-content-end align-items-stretch"></div>

//               <div class="container-big">
//                 <button className="btn btn-lg" onClick={this.revertBack}>
//                   Back
//                 </button>
//                 <div class="row">
//                   <div class="col">
//                     <div class="container-new">
//                       ToDo
//                       {todolist1}
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="container-new">
//                       Progress
//                       {progresslist1}
//                     </div>
//                   </div>
//                   <div class="col">
//                     <div class="container-new">
//                       Done
//                       {donelist1}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       }
//     }
//   }
// }

// export default Home;


import React, { Component } from "react";
//import TaskWindow from './TaskWindow/TaskWindow';
import CreateTask from "../CreateTask/CreateTaskApp";
import "./HomePage.css";
import ToDo from "./TaskWindow/ToDo/ToDo";
import Progress from "./TaskWindow/Progress/Progress";
import Done from "./TaskWindow/Done/Done";
import "./TaskWindow/ToDo/ToDo.css";
import "./TaskWindow/Progress/Progress.css";
import "./TaskWindow/Done/Done.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortbutton: "None",
      filterbutton: false,
      sortArr: [],
      filterArr: [],
      descriptions: [],
      t:[],
      // todolist2: [],
      // progresslist2: [],
      // donelist2:[]
    };
    this.setSortType = this.setSortType.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.taskInfo = this.taskInfo.bind(this);
    this.revertBack = this.revertBack.bind(this);
  }

  componentDidMount() {
    var USER_NAME = "";
    var ACCESS_TOKEN =
      localStorage.getItem("access_token");

    var UserDetails1 = fetch("http://13.232.149.111:8000/task/Team1", {
      headers: {
        Authorization: "JWT " + ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // convert to json
      .then((json) => {
        this.setState({
          ...this.state.sortArr,
          ...this.state.sortbutton,
          ...this.state.taskbutton,
          descriptions: [...this.state.descriptions, ...json],
          ...this.state.t
        });
        console.log(json);
        console.log("making work",this.state.t);
      })
      .catch((err) => console.log("Request Failed", err));
  }

  taskInfo() {
    console.log("Clicked!");
    this.setState({
      taskbutton: true,
      ...this.state.sortArr,
      ...this.state.descriptions,
      ...this.state.sortbutton,
      ...this.state.t
    });
  }
  revertBack() {
    this.setState({
      ...this.state.descriptions,
      sortbutton: false,
      filterbutton: false,
    });
  }

  setFilter(data) {
    if (data.target.value != "#") {
      this.setState({
        ...this.state.descriptions,
        ...this.state.sortArr,
        ...this.state.t,
        sortbutton: false,
        filterbutton: true,
      });
      var user = this.state.descriptions.filter((username) => {
        return username.Assignee === "test";
      });

      this.setState({
        filterArr: [...this.state.filterArr, user],
      });
    } else {
      this.setState({
        sortbutton: false,
        filterbutton: false,
        ...this.state.descriptions,
        ...this.state.sortArr,
      });
      //this.render()
    }
  }

  setSortType(data) {
    if (data.target.value != "#") {
      // this.setState({
      //   ...this.state.descriptions,
      //   ...this.state.sortArr,
      //   sortbutton: data.target.value,
      //   // filterbutton : false
      // });
      let sorted = [];
      console.log(data.target.value);
      if (data.target.value === "Priority") {
        sorted = [];
        sorted = [this.state.descriptions].sort(
          (a, b) => a[data.target.value] - b[data.target.value]
        );
        console.log("sorted: ", sorted)
      }
      else if (data.target.value === "Planned_Date") {
        sorted = [];
        sorted = [this.state.descriptions].sort(
          (a, b) => new Date(a["Planned_Date"]) - new Date(b["Planned_Date"])
        );
        console.log("sorted: ",sorted);
      }
      var todo3 = [];
      for (var j = 0; j < this.state.descriptions.length; j++) {
        if (this.state.descriptions[j]["Status"] === "to-do")
          todo3.push(this.state.descriptions[j]);
        
      }
      console.log("todo3", todo3);
      console.log("description", this.state.descriptions);
      // console.log("Todogh:"+todo2.length+progress2.length + done2.length);
      // console.log("Progress"+progress)
      // console.log("Done:"+ done)
      // console.log(this.state.descriptions)
      let todolist2 = todo3.map((data) => (
        <ToDo
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
      console.log("todolist", todolist2);

      this.setState({
        ...this.state.sortArr,
        ...this.state.sortbutton,
        ...this.state.taskbutton,
        descriptions: [...this.state.descriptions, ...sorted],
        t: [...todolist2]
      });
      console.log("setting description: ", this.state.descriptions)
      console.log("after inside", this.state.t)
      // this.setState({
      //   ...this.state.sortArr,
      //   ...this.state.sortbutton,
      //   ...this.state.descriptions,
      //   ...this.state.filterbutton
      // })
    } else {
      // this.setState({
      //   sortbutton: false,
      //   filterbutton: false,
      //   ...this.state.descriptions,
      //   sortArr: [this.state.sortArr, ...this.state.descriptions],
      // });
      var todo3 = [];
      for (var j = 0; j < this.state.descriptions.length; j++) {
        if (this.state.descriptions[j]["Status"] === "to-do")
          todo3.push(this.state.descriptions[j]);
      }
      console.log("todo3", todo3);
      console.log("description", this.state.descriptions);
      // console.log("Todogh:"+todo2.length+progress2.length + done2.length);
      // console.log("Progress"+progress)
      // console.log("Done:"+ done)
      // console.log(this.state.descriptions)
      let todolist2 = todo3.map((data) => (
        <ToDo
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
      console.log("todolist", todolist2);

      this.setState({
        ...this.state.sortArr,
        ...this.state.sortbutton,
        ...this.state.taskbutton,
       ...this.state.descriptions,
        t: [...todolist2],
      });
      console.log("setting description: ", this.state.descriptions);
      console.log("after inside", this.state.t);
      window.location.reload();
      //this.render()
    }
  }

  render() {
    // if (this.state.sortbutton == true && this.state.filterbutton == false) {
    //   //API Call

    //   var todo = [];
    //   var progress = [];
    //   var done = [];
    //   for (var i = 0; i < this.state.sortArr.length; i++) {
    //     if (this.state.sortArr[i]["Status"] === "to-do")
    //       todo.push(this.state.sortArr[i]);
    //     if (this.state.sortArr[i]["Status"] === "in-progress")
    //       progress.push(this.state.sortArr[i]);
    //     if (this.state.sortArr[i]["Status"] === "done")
    //       done.push(this.state.sortArr[i]);
    //   }

    //   console.log(todo[1]);
    //   // console.log("Progress"+progress)
    //   // console.log("Done:"+ done)
    //   // console.log(this.state.descriptions)
    //   let todolist = todo.map((data) => (
    //     <ToDo
    //       Title={data.Title}
    //       Team_Name={data.Team_Name}
    //       Description={data.Description}
    //       Priority={data.Priority}
    //       Assignee={data.Assignee}
    //       Reporter={data.Reporter}
    //       Planned_Date={data.Planned_Date}
    //       Status={data.Status}
    //     />
    //   ));
    //   let progresslist = progress.map((data) => (
    //     <Progress
    //       Title={data.Title}
    //       Team_Name={data.Team_Name}
    //       Description={data.Description}
    //       Priority={data.Priority}
    //       Assignee={data.Assignee}
    //       Reporter={data.Reporter}
    //       Planned_Date={data.Planned_Date}
    //       Status={data.Status}
    //     />
    //   ));
    //   let donelist = done.map((data) => (
    //     <Done
    //       Title={data.Title}
    //       Team_Name={data.Team_Name}
    //       Description={data.Description}
    //       Priority={data.Priority}
    //       Assignee={data.Assignee}
    //       Reporter={data.Reporter}
    //       Planned_Date={data.Planned_Date}
    //       Status={data.Status}
    //     />
    //   ));
    //   console.log("The list>>" + todolist[0]);

    //   return (
    //     <div className="HomePage ">
    //       <div class="container-bar" style={{margin:"50px"}}>
    //         <CreateTask />
    //       </div>
          
    //         <div class="container-lg" style={{ padding: "25px" }}>
    //           <button
    //             className="btn btn-primary"
    //             onClick={this.revertBack}
    //             style={{ margin: "25px" }}
    //           >
    //             Back
    //           </button>
             
                
               
                
    //               <div class="container-lg" style={{ padding: "25px", backgroundColor:"#e2eafc"}}>
    //                 <div class="row">
    //                   <div class="col-md-4 col-sm-12" style={{ margin: "0px" }}>
    //                     <div class="container-new">
    //                       <h5
    //                         style={{ margin: "30px" }}
    //                         className="text-center"
    //                       >
    //                         ToDo
    //                       </h5>
    //                       {todolist}
    //                     </div>
    //                   </div>
    //                   <div class="col-md-4 col-sm-12" style={{ margin: "0px" }}>
    //                     <div class="container-new">
    //                       <h5
    //                         style={{ margin: "30px" }}
    //                         className="text-center"
    //                       >
    //                         Progress
    //                       </h5>
    //                       {progresslist}
    //                     </div>
    //                   </div>
    //                   <div class="col-md-4 col-sm-12" style={{ margin: "0px" }}>
    //                     <div class="container-new">
    //                       <h5
    //                         style={{ margin: "30px" }}
    //                         className="text-center"
    //                       >
    //                         Done
    //                       </h5>
    //                       {donelist}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
           
        
    //   );
    // }
    //  else if (
    //   this.state.sortbutton == false &&
    //   this.state.filterbutton == false
    // ) {
    var todo2 = [];
    var progress2 = [];
    var done2 = [];
    for (var j = 0; j < this.state.descriptions.length; j++) {
      if (this.state.descriptions[j]["Status"] === "to-do")
        todo2.push(this.state.descriptions[j]);
      if (this.state.descriptions[j]["Status"] === "in-progress")
        progress2.push(this.state.descriptions[j]);
      if (this.state.descriptions[j]["Status"] === "done")
        done2.push(this.state.descriptions[j]);
    }
    console.log("todo2", todo2);
    console.log("description",this.state.descriptions);
    // console.log("Todogh:"+todo2.length+progress2.length + done2.length);
    // console.log("Progress"+progress)
    // console.log("Done:"+ done)
    // console.log(this.state.descriptions)
    let todolist2 = todo2.map((data) => (
      <ToDo
        Task_id = {data.Task_id}
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
    console.log("todolist",todolist2);
    let progresslist2 = progress2.map((data) => (
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
    let donelist2 = done2.map((data) => (
      <Done
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
    
  //   this.setState({
    
  //     todolist2: todolist2,
  //     progresslist2: progresslist2,
  //     donelist2: donelist2
  //  })
    {
      return (
        <div className="HomePage ">
          <div className="row ">
            <div
              className="col-md-2 col-sm-6 form-row "
              style={{ margin: "5px" }}
            >
              <select onClick={this.setSortType} className="form-control">
                <option>Sort By</option>
                <option value="#">No Sort</option>
                <option value="Priority">Sort By Priority</option>
                <option value="Planned_Date">Sort By Due Date</option>
              </select>
            </div>
            <div className="col-md-2 col-sm-6 " style={{ margin: "5px" }}>
              <select onClick={this.setFilter} className="form-control">
                <option value="#">Filter by</option>
                <option value="Assignee">Only My task</option>
              </select>
            </div>
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
                    {/* {todolist2} */}
                    {this.state.t} 
                  </div>
                </div>
                <div class="col-md-4 col-sm-12" style={{ margin: "px" }}>
                  <div class="container-new">
                    <h3 style={{ margin: "30px" }} className="text-center">
                      Progress
                      </h3>
                    {progresslist2}
                  </div>
                </div>
                <div class="col-md-4 col-sm-12" style={{ margin: "px" }}>
                  <div class="container-new">
                    <h3 style={{ margin: "30px" }} className="text-center">
                      Done
                      </h3>
                    {donelist2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    //   } 
    //   else if (
    //     this.state.filterbutton == true &&
    //     this.state.sortbutton == false
    //   ) {
    //     var todo1 = [];
    //     var progress1 = [];
    //     var done1 = [];
    //     for (var k = 0; k < this.state.filterArr.length; k++) {
    //       if (
    //         this.state.descriptions[k]["Status"] === "to-do" &&
    //         this.state.descriptions[k]["Assignee"] === "test"
    //       )
    //         todo1.push(this.state.descriptions[k]);
    //       if (
    //         this.state.descriptions[k]["Status"] === "in-progress" &&
    //         this.state.descriptions[k]["Assignee"] === "test"
    //       )
    //         progress1.push(this.state.descriptions[k]);
    //       if (
    //         this.state.descriptions[k]["Status"] === "done" &&
    //         this.state.descriptions[k]["Assignee"] === "test"
    //       )
    //         done1.push(this.state.descriptions[k]);
    //     }

    //     let todolist1 = todo1.map((data) => (
    //       <ToDo
    //         Title={data.Title}
    //         Team_Name={data.Team_Name}
    //         Description={data.Description}
    //         Priority={data.Priority}
    //         Assignee={data.Assignee}
    //         Reporter={data.Reporter}
    //         Planned_Date={data.Planned_Date}
    //         Status={data.Status}
    //       />
    //     ));
    //     let progresslist1 = progress1.map((data) => (
    //       <Progress
    //         Title={data.Title}
    //         Team_Name={data.Team_Name}
    //         Description={data.Description}
    //         Priority={data.Priority}
    //         Assignee={data.Assignee}
    //         Reporter={data.Reporter}
    //         Planned_Date={data.Planned_Date}
    //         Status={data.Status}
    //       />
    //     ));
    //     let donelist1 = done1.map((data) => (
    //       <Done
    //         Title={data.Title}
    //         Team_Name={data.Team_Name}
    //         Description={data.Description}
    //         Priority={data.Priority}
    //         Assignee={data.Assignee}
    //         Reporter={data.Reporter}
    //         Planned_Date={data.Planned_Date}
    //         Status={data.Status}
    //       />
    //     ));

    //     {
    //       return (
    //         <div className="HomePage ">
    //           <div class="container-bar" style={{ margin: "50px" }}>
    //             <CreateTask />
    //           </div>

    //           <div class="container-lg" style={{ padding: "25px" }}>
    //             <button
    //               className="btn btn-primary"
    //               onClick={this.revertBack}
    //               style={{ margin: "25px" }}
    //             >
    //               Back
    //             </button>

    //             <div
    //               class="container-lg"
    //               style={{ padding: "25px", backgroundColor: "#e2eafc" }}
    //             >
    //               <div class="row">
    //                 <div class="col-md-4 col-sm-12" style={{ margin: "0px" }}>
    //                   <div class="container-new">
    //                     <h5 style={{ margin: "30px" }} className="text-center">
    //                       ToDo
    //                     </h5>
    //                     {todolist1}
    //                   </div>
    //                 </div>
    //                 <div class="col-md-4 col-sm-12" style={{ margin: "0px" }}>
    //                   <div class="container-new">
    //                     <h5 style={{ margin: "30px" }} className="text-center">
    //                       Progress
    //                     </h5>
    //                     {progresslist1}
    //                   </div>
    //                 </div>
    //                 <div class="col-md-4 col-sm-12" style={{ margin: "0px" }}>
    //                   <div class="container-new">
    //                     <h5 style={{ margin: "30px" }} className="text-center">
    //                       Done
    //                     </h5>
    //                     {donelist1}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     }
    //   }
    // }
  }
}


export default Home;