var React = require('react');
var ReactDOM = require('react-dom');
class Page extends React.Component {
    render() {
        return <div className='page'>
        {this.props.children}
        </div>
    }
}
module.exports = Page;