var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('../actions/taskActions.jsx');


export class Todo extends React.Component {
  render () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
};

export default connect()(Todo);
=======
import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: ""
        }

        this.checkTodo = this.checkTodo.bind(this);
        this.handleTask = this.handleTask.bind(this);
    }


    checkTodo(event) {
        this.setState({
            task: event.target.value
        })
    }

    handleTask(event) {

        var userTask = {
            task: this.state.task
        }

        this.props.postTodo(userTask);
    }

    render() {
        return <div>
            <form action="/friend-book/register" method="POST" className="form-signin">
                <div className="form-group">
                    {/* <label for="inputTodo" className="sr-only">Add To Do</label> */}
                    <input type="text" name="name" id="inputTodo" className="form-control" placeholder="Add a task" value={this.state.name}
                    onChange={this.checkTodo} />
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleTask}>Submit</button>
            </form>
        </div>;
    }
}

export default Todo;
