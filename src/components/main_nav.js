var React = require('react');
var ReactDOM = require('react-dom');
class MainNav extends React.Component {
    render() {
        return <nav className='main-nav'>
            <a >Dashboard</a>
            <a className="active">Orders</a>
            <a >Catalog</a>
            </nav>
    }
}
module.exports = MainNav;