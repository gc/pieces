import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Piece from './Piece';

class PieceListing extends Component {
	render() {
		return (
				<FlipMove className="d-flex justify-content-around flex-wrap mt-3" leaveAnimation="fade">
					{this.props.pieces.map(piece => <Piece piece={piece}/>)}
				</FlipMove>
		);
	}
}

PieceListing.propTypes = {
  pieces: PropTypes.array.isRequired
};

export default PieceListing;
