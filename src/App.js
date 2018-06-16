import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from "./components/Header";
import PieceListing from "./components/PieceListing";

class App extends Component {
  state = {
    query: ""
  }
  filterPieces = (query) => {
    this.setState({ query })
  }
  render() {
    const { pieces } = this.props;
    const { store } = this.props.match.params;
    const { piece } = this.props.match.params;
    return (
      <div>
        <Header store={store} filterPieces={this.filterPieces} />
        {piece && <PieceListing pieces={this.props.pieces.filter(p => p.name === piece)} />
      || <PieceListing pieces={this.props.pieces} filter={this.state.query} />}
      </div>
    );
  }
}

App.propTypes = {
  pieces: PropTypes.array.isRequired,
  store: PropTypes.string,
};

export default App;
