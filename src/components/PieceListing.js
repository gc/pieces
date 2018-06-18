import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PieceCard from './PieceCard';
import shuffleArray from "../util/shuffleArray";

class PieceListing extends Component {
	filterArray(pieces) {
		const { filter } = this.props;
		if (filter) {
			return pieces.filter(p => p.name.toLowerCase().includes(filter) ||
			p.description.toLowerCase().includes(filter) || p.creator.toLowerCase().includes(filter))
		} else return shuffleArray(pieces);
	}

	render() {
		const pieces = this.filterArray(this.props.pieces);
			return (
				<div>
					{this.props.store && (
						<div className="grey-text w-100 darkgrey-bg p-3">{this.props.store.description}</div>
					)}
					{pieces.length && <div className="d-flex justify-content-around flex-wrap mt-3">
						{pieces.map(piece => <PieceCard key={piece.name} piece={piece} goToPiece={this.props.goToPiece} />)}
					</div>}
					{!pieces.length && <h1 className="white text-center">Couldn't find any pieces!</h1>}
				</div>
			)
		}
};

PieceListing.propTypes = {
  pieces: PropTypes.array.isRequired,
	filter: PropTypes.string.isRequired
};

export default PieceListing;
