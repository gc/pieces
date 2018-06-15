import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import CodeIcon from '../assets/code.svg';
import DownloadIcon from "../assets/download.svg";

class Piece extends Component {
	render() {
		const { piece } = this.props;
		return (
			<div className="card m-3" style={{ width: '18rem' }}>
				<div className="card-header d-flex justify-content-between">
					{piece.name}
					<div className="w-25 d-flex justify-content-around">
						<a href="/"><img src={DownloadIcon} /></a>
						<a href={`https://github.com/dirigeants/klasa-pieces/tree/master/${piece.path + piece.store}/${piece.name}.js`}><img src={CodeIcon} /></a>
					</div>
				</div>
				<div className="card-body">
			    <p className="card-text">{piece.description}</p>
					<p className="card-text">
						<small className="text-muted">
							Created by <a href={`https://github.com/${piece.creator}`}>{piece.creator}</a>
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

export default Piece;
