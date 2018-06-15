import React, { Component } from 'react';
import Header from "./components/Header";
import PieceListing from "./components/PieceListing";
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Header store={this.props.store}/>
        <h1>{this.props.match.params.store}</h1>
        <h2>{this.props.match.params.piece}</h2>
        <PieceListing pieces={this.props.pieces} />
      </div>
    );
  }
}

App.propTypes = {
  pieces: PropTypes.array.isRequired,
  store: PropTypes.string.isRequired,
};

export default App;
