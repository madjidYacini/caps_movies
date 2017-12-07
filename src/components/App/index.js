import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Nav from '../Nav';
import Home from '../Home'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Nav />
          {this.props.children} 
        </div>
        <div id="foot">
          <h3> movie finder &copy;2017</h3>
        </div>
      </div>
    );
  }
}

export default App;
