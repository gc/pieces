import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { stores } from "../assets/metadata.json";

class Header extends Component {
	generateLinks() {
		return stores.map(store => (
			<li className="nav-item" key={store.name}>
				<Link className={`nav-link ${this.props.store === store.name && "active"}`} to={`/${store.name}`}>{store.name}</Link>
			</li>
		))
	}
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <a className="navbar-brand font-weight-normal" href="#">Pieces</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav">
			      {this.generateLinks()}
			    </ul>
			  </div>
			</nav>
		);
	}
}

export default Header;
