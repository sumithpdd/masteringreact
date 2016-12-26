var React = require('react');
var ReactDOM = require('react-dom');
class PageHeader extends React.Component {
    render() {
        return <div className='page-header'>
        {this.props.children}
      </div>
    }
}
module.exports = PageHeader;


