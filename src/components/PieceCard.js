import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CodeIcon, DownloadIcon } from '../assets/';
import { withRouter } from 'react-router-dom'

class PieceCard extends Component {
	render() {
		const { piece } = this.props;
		return (
			<div className="card m-3 darkgrey-bg" onClick={() => {
					this.props.history.push(`/${piece.store}/${piece.name}`)
				}}>
				<div className="card-header d-flex justify-content-between">
					<h6 className="white">{piece.name}</h6>
					<div className="w-25 d-flex justify-content-around">
						<a href={`https://raw.githubusercontent.com/dirigeants/klasa-pieces/master/${piece.store + piece.path + piece.name}.js`} target="_blank" download>
							<DownloadIcon classes="white" />
						</a>
						<a href={`https://github.com/dirigeants/klasa-pieces/tree/master/${piece.store + piece.path + piece.name}.js`} target="_blank">
							<CodeIcon classes="white" />
						</a>
					</div>
				</div>
				<div className="card-body grey-text">
			    <p className="card-text">{piece.description}</p>
					<p className="card-text">
						<small>
							Created by <a className="blurple" href={`https://github.com/${piece.creator}`}>{piece.creator}</a>
						</small>
					</p>
			  </div>
			</div>
		);
	}
}

PieceCard.propTypes = {
  piece: PropTypes.object.isRequired
};

export default withRouter(PieceCard);
