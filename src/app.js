import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
// import makeRoutes from './routes.jsx';
// import store from './store';
// import { Provider } from 'react-redux';
// import routes from './routes.jsx';
import Main from './containers/Main.jsx';


// const appEntry = <Router history={history}>{makeRoutes()}</Router>;
ReactDOM.render(
	// <Provider store={store}>
	// {routes}
	<Main />
	/*</Provider>*/,
	document.getElementById('root')
);
