import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Piece extends Component {
	render() {
		const { piece } = this.props;
		return (
			<div className="card" style={{ width: '18rem' }}>
			  <div className="card-body">
			    <h5 className="card-title">{piece.name}</h5>
			    <h6 className="card-subtitle mb-2 text-muted">{piece.creator}</h6>
			    <p className="card-text">{piece.description}</p>
			    <a href="#" className="card-link">Card link</a>
			    <a href="#" className="card-link">Another link</a>
			  </div>
			</div>
		);
	}
}

Piece.propTypes = {
  pieces: PropTypes.array.isRequired
};

export default Piece;
