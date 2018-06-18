import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import Header from "./components/Header";
import PieceListing from "./components/PieceListing";
import Piece from "./components/Piece";

class App extends Component {
  state = {
    query: ""
  }

  filterPieces = (query) => {
    this.setState({ query })
  }

  goToPiece(store, name) {
    this.props.history.push(`/${store}/${name}`)
  }

  render() {
    const { pieces, store } = this.props;
    const { piece } = this.props.match.params;
    return (
      <Fragment>
        <Header store={store} filterPieces={this.filterPieces} />
        {piece && <Piece piece={pieces.filter(p => p.name === piece)[0]} goToPiece={this.goToPiece.bind(this)} />}
        {!piece && <PieceListing pieces={pieces} filter={this.state.query} store={store} goToPiece={this.goToPiece.bind(this)} />}
      </Fragment>
    );
  }
}

App.propTypes = {
  pieces: PropTypes.array.isRequired,
  store: PropTypes.object,
};

export default withRouter(App);
