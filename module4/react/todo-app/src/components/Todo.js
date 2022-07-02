import {Component} from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state ={
            tasks : [{task : "Learn Js",id : 1},{task : "Learn DOM", id : 2},{task:"Learn React",id : 3},{task : "Learn Node",id : 4}] ,
            currrTask : ""
        }
    }

    handleChange = (e) =>{
        // console.log(e.target.value);
        this.setState({
            currrTask : e.target.value
        })
    }
    
    handleAddTask = () =>{
        this.setState({
            tasks : [...this.state.tasks,{task : this.state.currrTask , id : this.state.tasks.length + 1}],
            currrTask :""
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.currrTask} onChange = {this.handleChange}/>
                <button onClick={this.handleAddTask}> Add Task </button>
                <ul>
                    {
                        this.state.tasks.map((taskObj)=>(
                            <li key = {taskObj.id}>
                                <p>
                                    {taskObj.task}
                                </p>
                                <button>
                                    Delete
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Todo;