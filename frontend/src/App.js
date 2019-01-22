/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Experiment from './Experiment.jsx';
import Status from './Status.jsx';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <div>
              <Link to="/">Home</Link>
              <span> </span>
              <Link to="/experiment">Experiment</Link>
              <span> </span>
              <Link to="/status">Status</Link>
            </div>
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

export default App;
