import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from "./components/Header";
import PieceListing from "./components/PieceListing";
import Piece from "./components/Piece";

class App extends Component {
  render() {
    const { pieces } = this.props;
    const { store } = this.props.match.params;
    const { piece } = this.props.match.params;
    console.log(pieces, store, piece)
    return (
      <div>
        <Header store={store}/>
        {piece && <PieceListing pieces={this.props.pieces.filter(p => p.name === piece)} />
               || <PieceListing pieces={this.props.pieces} />}
      </div>
    );
  }
}

App.propTypes = {
  pieces: PropTypes.array.isRequired,
  store: PropTypes.string.isRequired,
};

export default App;
