var React = require('react');
var ReactDOM = require('react-dom');
var MainNav = require('./main_nav');
class MainHeader extends React.Component {
    render() {
        return <div className='main-header'>
            <div className='logo'>StoreKeeper</div>
            <MainNav />
        </div>
    }
}
module.exports = MainHeader;