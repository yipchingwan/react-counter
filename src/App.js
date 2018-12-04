import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './components/CounterGroup.js'

class App extends Component {
  state = {size : 0}
  
  
  render() {
    return (
      <div>
       <CounterGroup/>      
      </div>
    );
  }
}

export default App;
