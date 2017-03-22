import React, { Component } from 'react';
import Todo from '../components/Todo.jsx';
import axios from 'axios';

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      returnedTask: ""
    };
    this.postTodo = this.postTodo.bind(this);
  }

  postTodo(formInput) {
    console.log(formInput);
    axios.post('/tasks', formInput).then((data) => {
      console.log("DATA AFTER POST", data);
      this.setState({returnedTask: data.task});
    });

  }



  render() {
    return(
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-align-left">Task 1</h3>
        </div>
        <div className="panel-body">
          <div className="alert alert-success" role="alert">{this.state.returnedTask}</div>

          <Todo
            postTodo={this.postTodo}
          />
        </div>
      </div>

    );
  }
}



export default Tasks;
