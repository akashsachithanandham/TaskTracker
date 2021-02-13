import './TaskWindow.css';
import React, {Component} from 'react';
import ToDo from './ToDo/ToDo'
import Progress from './Progress/Progress';
import Done from './Done/Done'

class TaskWindow extends Component{
    render(){
        return (
        <div class="container-xl">
        <div class="row">
          <div class="col-sm">
           <ToDo/>
          </div>
          <div class="col-sm">
            <Progress/>
          </div>
          <div class="col-sm">
            <Done/>
          </div>
        </div>
      </div>
        );
    }
}
export default TaskWindow;