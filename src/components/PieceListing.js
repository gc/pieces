import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Piece from './Piece';

class PieceListing extends Component {
	render() {
		return (
			<Fragment>
				{this.props.pieces.map(piece => <Piece piece={piece}/>)}
			</Fragment>
		);
	}
}

PieceListing.propTypes = {
  pieces: PropTypes.array.isRequired
};

export default PieceListing;
