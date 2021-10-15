import React from 'react';

import logo from './logo.svg';
import './App.css';

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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>{this.state.apiStatus}</code>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
