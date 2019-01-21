import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

class Home extends Component {
  componentWillMount() {
    this.testBackend();
  }

  state = {
    test: 'nothing.',
  }

  testBackend = async () => {
    const test = await fetch('http://localhost:80/api/', {
      method: 'GET',
      headers,
      cache: 'default',
    });
    const testJson = await test.json();
    if (testJson && testJson.status) {
      this.setState({ test: testJson.status });
    }
  }

  render() {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          The backend says: {this.state.test}
        </p>
      </header>
    );
  }
}

export default Home;
