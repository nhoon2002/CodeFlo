import React, { Component } from 'react';
import Tasks from './Tasks.jsx';
// import Tasks2 from './Tasks2.jsx';

class TodoForm extends Component {
	render() {
		return (
        <div>
        <div className="jumbotron">

        </div>

        <div className='row'>
          <div className='col-md-6 col-sm-12 col-lg-4'><Tasks/></div>
          {/* <div className='col-md-6 col-sm-12 col-lg-4'><Tasks2/></div> */}
        </div>
        </div>

    );
  };
}

export default TodoForm;
