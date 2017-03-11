import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.js';
import Home from './containers/Home.jsx';
import Profile from './containers/Profile.jsx';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/profile" component={Profile}/>
    </Route>




  );
};
