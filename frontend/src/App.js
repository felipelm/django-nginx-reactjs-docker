import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/experiment">Experiment</Link>
              </li>
              <li>
                <Link to="/status">Status</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/experiment" component={Experiment} />
            <Route path="/status" component={Status} />
          </div>
        </Router>
      </div>
    );
  }
}

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

class Experiment extends Component {
  render() {
    return (
      <div>
        <h2>Experiment</h2>
      </div>
    );
  }
}

class Status extends Component {
  render() {
    return (
      <div>
        <h2>Status</h2>
      </div>
    );
  }
}

export default App;
