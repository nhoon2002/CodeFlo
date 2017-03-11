import React, { PropTypes, Component } from 'react';
import './App.css';
import Header from '../components/Header';

function getNiceName(routes) {
	let path = (routes[routes.length - 1] || {}).path || 'Home';
	return path.replace('/', '')
			.toUpperCase() || 'Unknown Page';
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
          <h2>{getNiceName(this.props.routes)}{' '}</h2>
        

        <div className="container App-content">
          {this.props.children}
        </div>
      </div>

    );

  }
}

App.propTypes = {
	children: PropTypes.node,
	routes: PropTypes.array
};

export default App;
