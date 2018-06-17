import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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

  render() {
    const { pieces } = this.props;
    const { piece } = this.props.match.params;
    return (
      <Fragment>
        <Header store={this.props.store} filterPieces={this.filterPieces} />
        {piece && <Piece piece={this.props.pieces.filter(p => p.name === piece)[0]} />
      || <PieceListing pieces={this.props.pieces} filter={this.state.query} store={this.props.store} />}
      </Fragment>
    );
  }
}

App.propTypes = {
  pieces: PropTypes.array.isRequired,
  store: PropTypes.string,
};

export default App;
