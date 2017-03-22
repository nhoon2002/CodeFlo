import React, { Component, PropTypes } from 'react';


class ProfileItems extends Component {

	render() {
		return (
			<div className="thumbnail">
				<img src={this.props.imgSource} alt={this.props.fullName}/>
				<div className="caption">
					<h3>{this.props.fullName}</h3>
					<h3>{this.props.description}</h3>

				</div>

			</div>

	);
}
}

ProfileItems.propTypes = {
	imgSource: PropTypes.string.isRequired,
	fullName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default ProfileItems;
