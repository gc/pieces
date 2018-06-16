import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import PieceCard from './PieceCard';

class PieceListing extends Component {
		render() {
			return (
				<FlipMove className="d-flex justify-content-around flex-wrap mt-3">
					{this.props.pieces.map(piece => <PieceCard key={piece.name} piece={piece} />)}
				</FlipMove>
			)
		}
};

PieceListing.propTypes = {
  pieces: PropTypes.array.isRequired
};

export default PieceListing;
