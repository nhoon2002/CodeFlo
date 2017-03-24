import React from 'react';
import connect from 'react-redux';
// import logo from './logo.svg';
// import profilepic from './profilepic.jpg'
import AsyncExample from './SearchForm.jsx';
import { Link } from 'react-router';
// import './Header.css';
class Header extends React.Component {

  constructor(props){
    super(props);

    this.logOut = this.logOut.bind(this);
  }

  logOut(){
    this.props.logout();
  }

  render() {
    let noContent = null;
  return(
    <div>
        {
          this.props.logCheck || this.props.logRegCheck

          ?
          <nav className="navbar navbar-default">
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                  <img src='assets/img/logo-icon.png' className="Header-logo" alt="logo" />

              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>

                    <li><Link to="/todoform">ToDo</Link></li>
                    <li><Link to="/profile">Profile</Link></li>

                  <li><AsyncExample/></li>

                </ul>

                <ul className="nav navbar-nav navbar-right">

                    <li className="notifications-bar">
                      <button className="btn btn-primary" type="button">Notifications
                        <span className="badge">4</span>
                      </button>
                    </li>
                    <li>
                      <img className='navbar-profilepic img-circle' src='/assets/img/profilepic.jpg' alt='profilepic'/>
                    </li>
                    <li onClick={this.logOut}>Logout</li>


                </ul>
              </div>
            </div>
          </nav>

          :

          <nav className="navbar navbar-default">
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                  <img src='assets/img/logo-icon.png' className="Header-logo" alt="logo" />

              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>

                  <li><AsyncExample/></li>

                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li>Login</li>
                </ul>
              </div>
            </div>
          </nav>
        }

    </div>
  );
  }
}


export default Header;
