import React, { Component } from 'react';
import Header from '../components/Header.jsx';



class Main extends Component {
  render() {
    return (
      <div className="Main">

         <Header
           logout={this.props.logout}
           logCheck={this.props.isLoggedInCheck}
           logRegCheck={this.props.isLoggedInReg}
           router={this.props.router}
         />


        <div className="container Main-content">



         {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLZtLbv3lZc9BEZ0B03eouiWG72aW3F6sL&autoplay=1&loop=1&playlist=PLZtLbv3lZc9BEZ0B03eouiWG72aW3F6sL" frameBorder="0"></iframe> */}


          {React.cloneElement(this.props.children, this.props)}


        </div>
      </div>

    );

  }
}

// Main.propTypes = {
// 	children: PropTypes.node,
// 	routes: PropTypes.array
// };

export default Main;
