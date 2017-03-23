import React, { Component } from 'react';
import Register from './Register.jsx';
import regisCont from './registerCont.jsx';
// import LoginModal from '../components/LoginModal.jsx'

const Home = React.createClass ({
	render() {
        let random = null;

        return (
        <div>
            <div className="jumbotron">
                <h1>Welcome to</h1>

                {
                    this.props.isLoggedInCheck || this.props.isLoggedInReg

                    ?

                    random

                    :

                    <Register
                        open={this.props.openModal}
                        close={this.props.closeModal}
                        show={this.props.showModal}
                        create={this.props.createUser}
                        regErr={this.props.errorMsgs}
                    />

                }
            </div>
        </div>

    );
  }
};

export default Home;
