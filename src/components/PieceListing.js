import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieceCard from './PieceCard';
import Piece from "./Piece";

import shuffleArray from "../util/shuffleArray";

class PieceListing extends Component {
	filterArray(pieces) {
		const { filter, store } = this.props;
		if (filter) {
			return pieces.filter(p => p.name.toLowerCase().includes(filter) ||
			p.description.toLowerCase().includes(filter) || p.creator.toLowerCase().includes(filter))
		}
		return shuffleArray(pieces);

	}
	render() {
			return (
				<div>
					{this.props.store && (
						<div className="grey-text w-100 darkgrey-bg p-3">{this.props.store.description}</div>
					)}
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
