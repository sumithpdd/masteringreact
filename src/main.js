//import React, { Component } from 'react';
var React = require('react');
 var ReactDOM  = require('react-dom');
class Greeter extends React.Component {
  render() {
    return React.DOM.h1(null, "Hello" + this.props.name); 
  }
}
 
class App extends React.Component {
  render() {
    return React.createElement(Greeter, { name:"Sumith"});
  //  return React.DOM.h1(null, "Hello World from React.DOM");
  //  return React.createElement('h1', null, "Hello World from CreateElement")
   // return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
