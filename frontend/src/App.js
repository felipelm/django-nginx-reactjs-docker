import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json"
});

class App extends Component {
  componentWillMount() {
    this.testBackend()
  }

  state = {
    test: 'nothing.'
  }

  testBackend = async () => {
    const test = await fetch("http://127.0.0.1:8000", {
      method: "GET",
      headers: headers,
      cache: "default"
    });
    const testJson = await test.json();
    if(testJson && testJson.status)
      this.setState({ test: testJson.status });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The backend says: {this.state.test}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
