import React, { Component } from "react";
import TaskWindow from "../TaskWindow/TaskWindowApp";
import CreateTask from "../CreateTask/CreateTaskApp";
import "./HomePage.css";

class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <div class="container-bar">
          <CreateTask />
          <br></br>
        </div>

        <TaskWindow />
      </div>
    );
  }
}

export default Home;
