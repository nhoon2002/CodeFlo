import React, { PropTypes, Component } from 'react';
import Header from '../components/Header.jsx';



class Main extends Component {
  render() {
    return (
      <div className="Main">

        <Header />

        <div className="container Main-content">
    
          {React.cloneElement(this.props.children, this.props)}
    
        </div>
      </div>

    );

  }
}

Main.propTypes = {
	children: PropTypes.node,
	routes: PropTypes.array
};

export default Main;
