import React,{Component} from 'react'
import './CreateTask.css'

class CreateTask extends Component{
    render(){
        return (
           <div className = "container-fluid">
                <button type="button" class="btn btn-primary btn-lg">Create Task</button>
                <div>Here Lies are fate!</div>
           </div>
        );
    }
}

export default CreateTask;