import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import Highlight from 'react-highlight';

import { CodeIcon, DownloadIcon } from '../assets/';
import CreatorCard from "./CreatorCard";
import 'highlight.js/styles/atom-one-dark.css';


class Piece extends Component {
	state = {
		creator: null,
		code: null
	}

	componentDidMount() {
		const { piece } = this.props;
		fetch(`https://api.github.com/users/${piece.creator}`)
			.then(res => res.json())
			.then(data => {
				this.setState({ creator: data });
			})
		fetch(`https://raw.githubusercontent.com/dirigeants/klasa-pieces/master/${piece.path}`)
			.then(response => response.text())
			.then(text => {
				this.setState({ code: text });
			})
	}

	render() {
		const { piece } = this.props;
		return (
				<div className="jumbotron darkgrey-bg w-100 h-100">
					<div className="d-flex justify-content-between">
						<div>
							<h1 className="display-4 white">{piece.name}</h1>
							<p className="lead grey-text">{piece.description}</p>
							<hr className="my-4"/>
							<p className="lead">
								<div className="w-25 d-flex justify-content-around">
									<a href={`https://raw.githubusercontent.com/dirigeants/klasa-pieces/master/${piece.path}`} target="_blank" download>
										<DownloadIcon classes="white" />
									</a>
									<a href={`https://github.com/dirigeants/klasa-pieces/tree/master/${piece.path}`} target="_blank">
										<CodeIcon classes="white" />
									</a>
								</div>
							</p>
						</div>
						{this.state.creator && <CreatorCard {...this.state.creator} />}
					</div>
					<Highlight className="JavaScript lightgrey-bg p-3">
					  {this.state.code}
					</Highlight>
				</div>
		);
	}
}

Piece.propTypes = {
  piece: PropTypes.object.isRequired
};

export default withRouter(Piece);
