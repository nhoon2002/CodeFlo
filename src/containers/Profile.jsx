import React from 'react';
import ProfileItems from '../components/ProfileItems.jsx';


const Profile = React.createClass ({
	render() {
		return (

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 holder">
              <img className="img-circle" src="http://www.placehold.it/200x200" />
              <hr />
              <h2>John Doe</h2>
              <hr />
              <h4>Link: <a href="#">www.porfolio.com/john</a></h4>
              <div className="icons-holder">
                <a target='_blank' href="http://www.github.com">
                  <img src="assets/icons/github.png" className="profIcons"/>
                </a>
                <a target='_blank' href="http://www.linkedin.com">
                  <img src="assets/icons/linkedin.png" className="profIcons"/>
                </a>
              </div>
              <div className="buttons-holder">
                  <button type="button" className="btn btn-danger actionButtons">Add to Team</button>
                  <button type="button" className="btn btn-success actionButtons">Connect</button>
                  <button type="button" className="btn btn-primary actionButtons">Send Message</button>
                  <button type="button" className="btn btn-warning actionButtons">Send Message</button>
              </div>
          </div>
          <div className="col-md-3"></div>
        </div>



    );
  }
});

export default Profile;
