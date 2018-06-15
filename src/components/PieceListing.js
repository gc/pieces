import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Piece from './Piece';

class PieceListing extends Component {
	render() {
		return (
				<FlipMove className="d-flex justify-content-around flex-wrap mt-3" leaveAnimation="fade" enterAnimation="fade" duration={350}>
					{this.props.pieces.map(piece => <Piece piece={piece} key={piece.name}/>)}
				</FlipMove>
		);
	}
}

PieceListing.propTypes = {
  pieces: PropTypes.array.isRequired
};

export default PieceListing;
