import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Card from './containers/Card.jsx';


export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/card" component={Card}/>
    </Route>

  );
};
