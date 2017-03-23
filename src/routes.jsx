import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';
import App from './containers/App.jsx';
// import Main from './containers/Main.jsx';
import Home from './containers/Home.jsx';

import TodoApp from './components/TodoApp.jsx';
import Profile from './containers/Profile.jsx';
import TodoForm from './containers/TodoForm.jsx';
import Register from './containers/Register.jsx';
// import { connect } from 'react-redux';

// @connect((store) => {
// 	sessions:
// })


import { checkSession } from './actions/usersAction';

// <Route path="/register" onEnter={checkSesh()} component= {Register} />
const checkSesh = () => {
	console.log("INSIDE CHECK SESH FUNCTION");
	store.dispatch(checkSession());
}



const theRoutes = (
   	<Provider store={store}>
	  	<Router history={history}>
		    <Route path="/" component={App}>
				<IndexRoute onEnter={checkSesh} component={Home}/>
        <Route path="/todos" component={TodoApp}/>
		      <Route path="/profile" component= {Profile} />
		    </Route>
		</Router>
	</Provider>
  );


export default theRoutes;
