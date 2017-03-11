import React, { Component } from 'react';

class Tasks extends Component {
  render() {
    return(
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-align-left">Task 1</h3>
        </div>
        <div className="panel-body">
          <div className="alert alert-success" role="alert">Do the laundry</div>
          <div className="alert alert-info" role="alert">Finish React HW</div>
          <div className="alert alert-warning" role="alert">Refactor Code</div>
          <div className="alert alert-danger" role="alert">Marketing Analysis</div>
        </div>
      </div>

    );
  };
}



export default Tasks;
