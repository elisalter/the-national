import React, { Component } from 'react';
import BackgroundCarousel from '../BackgroundCarousel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackgroundCarousel />
        <div className="Heading">THE NATIONAL</div>
      </div>
    );
  }
}

export default App;
