import React from 'react';

import './App.css';
import bottle from './images/bottle.png';
import Items from './Items';

class App extends React.Component {
  constructor() {
    super();
    this.state = {apiStatus: "MERCH API OFFLINE"};
  }

  componentDidMount() {
    fetch('/api')
      .then(response => response.text())
      .then(data => this.setState({apiStatus: data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bottle} className="header-bottle" alt="bottle" />
          <h1>Merch</h1>
          <img src={bottle} className="header-bottle" alt="bottle" />
        </header>
        <Items></Items>
      </div>
    );
  }
}

export default App;
