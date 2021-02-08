import React, { Component } from 'react';
import './App.css';
import TheDate from './state/TheDate';
import Count from './state/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <TheDate />
        <Count count={123} step = {1}/>
      </div>
    );
  }
}


export default App;