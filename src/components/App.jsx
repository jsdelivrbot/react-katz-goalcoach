import React, { Component } from 'react';
// Connect component to STORE: 1 of 
// { connect } function works by hooking up two functions to react component,
// 1) it first connects a "maps states to props" function and a
// 2) "maps dispatch to props" function 
import { connect } from 'react-redux';

class App extends Component {
  render () {
    return (
      <div>App</div>
    )
  }
}

export default App;
