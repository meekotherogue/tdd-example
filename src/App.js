import React, { Component } from 'react';
import './App.css';
import AlgorithmDisplayer from './AlgorithmDisplayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">Hello World!</p>
        <AlgorithmDisplayer />
      </div>
    );
  }
}

export default App;
