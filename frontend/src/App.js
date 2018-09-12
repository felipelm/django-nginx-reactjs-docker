import React, { Component } from 'react';
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
    test: ''
  }

  testBackend = async () => {
    const test = await fetch("http://localhost/test/", {
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
        <p className="App-intro">
          From backend: {this.state.test}
        </p>
      </div>
    );
  }
}

export default App;
