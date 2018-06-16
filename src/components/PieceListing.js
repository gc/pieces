import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieceCard from './PieceCard';

class PieceListing extends Component {
	filterArray(pieces) {
		const { filter } = this.props;
		if (!filter) return pieces;
		return pieces.filter(p => p.name.toLowerCase().includes(filter) ||
		p.description.toLowerCase().includes(filter) || p.creator.toLowerCase().includes(filter))
	}
		render() {
			return (
				<div>
					<div className="d-flex justify-content-around flex-wrap mt-3">
						{this.filterArray(this.props.pieces).map(piece => <PieceCard key={piece.name} piece={piece} />)}
					</div>
				</div>
			)
		}
};

PieceListing.propTypes = {
  pieces: PropTypes.array.isRequired,
	filter: PropTypes.string.isRequired
};

export default PieceListing;
