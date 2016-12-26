var React = require('react');
var ReactDOM = require('react-dom');

class Header extends React.Component {
    render() {
      return <h1 style={{color: 'red'}}>{this.props.children}</h1>
  }}
class Greeter extends React.Component {
    render() {
      return <header>Hello {this.props.name}</header>;
        
      //return <h1>Hello {this.props.name}</h1>;
        //return  React.DOM.h1(null,this.props.name + "the Great "+this.props.surname)}
}}

const greeterFactory = React.createFactory(Greeter);
class App extends React.Component {
    render() {
      return <Greeter name="Sumith D" />;
   //     return  greeterFactory({name:"Sumith", surname: "D"})}
} }
ReactDOM.render(<App />, document.querySelector("#app"));
 