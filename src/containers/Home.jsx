import React, { Component } from 'react';
// import Tasks from './Tasks.jsx';
// import Tasks2 from './Tasks2.jsx';
import logo from './logo-full.png';
import './Home.css';


class Home extends Component {
	render() {
		return (
        <div>
        <div className="jumbotron">
						<h1>Welcome to <img id="logo" src={logo} /></h1>
						<button className="btn btn-primary">Sign In</button>
        </div>

        </div>

    );
  };
}

export default Home;
