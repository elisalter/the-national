import React, { Component } from 'react';
import BackgroundCarousel from '../BackgroundCarousel';
import PageBody from '../PageBody';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackgroundCarousel />
        <PageBody />
        <div className="Heading">THE NATIONAL</div>
      </div>
    );
  }
}

export default App;
