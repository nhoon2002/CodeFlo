import React from 'react';
import * as Redux from 'react-redux';
import {Link} from 'react-router';

import TodoList from './TodoList.jsx'
import AddTodo from './AddTodo.jsx';
import TodoSearch from './TodoSearch.jsx';
import * as actions from '../actions/taskActions.jsx';

export class TodoApp extends React.Component {
  render () {
    return (
      <div>
        <Header/>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Redux.connect()(TodoApp);
