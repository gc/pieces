import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { stores } from "../assets/metadata.json";

class Header extends Component {
	generateLinks() {
		return stores.map(store => (
			<li className="nav-item" key={store.name}>
				<Link className={`nav-link ${this.props.store === store.name && "active"}`} to={`/${store.name}`}>
					<small>{store.name}</small>
				</Link>
			</li>
		))
	}

	handleChange = (event) => {
		this.props.filterPieces(event.target.value);
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark darkgrey-bg">
			  <Link className="navbar-brand font-weight-normal" to="/">Pieces</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav mr-3">
			      {this.generateLinks()}
			    </ul>
					<input className="form-control mr-sm-2 my-1" onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search"/>
			  </div>
			</nav>
		);
	}
}

Header.propTypes = {
  store: PropTypes.object,
	filterPieces: PropTypes.func.isRequired
};

export default Header;
