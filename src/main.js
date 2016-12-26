var React = require('react');
    var ReactDOM = require('react-dom');
    class Header extends React.Component {
        render() {
        return  <h1 style={{color:'red'}}> {this.props.children}</h1 > ;
        }
    }

    class greater extends React.Component{
      constructor(props){
        super(props);
        this.state= {name:'Sumith'};

      }
        render() {
          return <div>
                    <Header>Hello {this.state.name}</Header>
                    <input type='text' ref='name' />
                    <button onClick={this.handleGreet.bind(this)}>Greet</button>
                  </div>
                
          }
          handleGreet()
          {
            this.setState({name: this.refs.name.value});
          }
    componentWillMount() {
        console.log("Component will Mount");
    }
    componentDidMount() {
        console.log("Component did Mount");
    }
    componentWillReceiveProps(nextProb) {
        console.log("ComponentwillRecieveProp", nextProb)

    }
    shouldComponentUpdate(nextProb , nextstate) {
        console.log("ShouldComponentUpdate",nextProb, nextstate)
        return true;
    }
    componentWillUpdate(nextProb , nextstate) {
        console.log("ComponentWillUpdate",nextProb, nextstate)
        return true;
    }
}

const greaterFactory = React.createFactory(greater);
class Home extends React.Component {
    render() {
        return  greaterFactory({name:"Sammy", surname: "Boy" })}
}
ReactDOM.render(<Home />, document.getElementById("app"));