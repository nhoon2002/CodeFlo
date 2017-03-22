import React, { Component } from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false,
            name: "",
            username: "",
            password: "",
            email: "",
            errors: false,
            errArr: []
        };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

  }


  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

handleForm(event) {
    var formInput = {
        email: this.state.email,
        password: this.state.password
    };

}

render() {

    return (
      <div>


        <Button
          bsStyle="primary"
          onClick={this.open}
        >
          Login
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <hr />
            <form className="form-signin">



              <div className="form-group">
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email" value={this.state.email}/>
              </div>


                <div className="form-group">
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password}
                    onChange={this.checkPassOne}/>
                  </div>

              </form>


          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleForm}>Login</button>
            <button className="btn btn-lg btn-warning btn-block" type="button" onClick={this.close}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>




    );
  }
}

export default LoginModal;
