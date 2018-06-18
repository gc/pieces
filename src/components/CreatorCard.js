import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreatorCard extends Component {
	render() {
		return (
				<div className="d-flex justify-content-around creator-card">
					<div>
						<small className="grey-text">Created by</small>
						<h3 className="white">{this.props.name}</h3>
					</div>
				  <img src={this.props.avatar_url} alt="Card image cap" style={{ width: '5rem' }}/>
				</div>
		);
	}
}

CreatorCard.propTypes = {
  piece: PropTypes.object.isRequired
};

export default CreatorCard;
