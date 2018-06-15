import React, { Component, Fragment } from 'react';
import Header from "./Header";

class NotFound extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div>Page not found.</div>
			</Fragment>
		);
	}
}

export default NotFound;
