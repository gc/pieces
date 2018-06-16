import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CodeIcon, DownloadIcon } from '../assets/';
import { withRouter } from 'react-router-dom'

class Piece extends Component {
	render() {
		const { piece } = this.props;
		return (
			<div className="h-100 darkgrey-bg">
				<div className="card-header d-flex justify-content-between">
					<h6 className="white">{piece.name}</h6>
					<div className="w-25 d-flex justify-content-around">
						<a href="/" target="_blank">
							<DownloadIcon classes="white" />
						</a>
						<a href={`https://github.com/dirigeants/klasa-pieces/tree/master/${piece.store + piece.path}/${piece.name}.js`} target="_blank">
							<CodeIcon classes="white" />
						</a>
					</div>
				</div>
				<div className="card-body grey-text">
			    <p className="card-text">{piece.description}</p>
					<p className="card-text">
						<small>
							Created by <a className="" href={`https://github.com/${piece.creator}`}>{piece.creator}</a>
						</small>
					</p>
			  </div>
			</div>
		);
	}
}

Piece.propTypes = {
  piece: PropTypes.object.isRequired
};

export default withRouter(Piece);
