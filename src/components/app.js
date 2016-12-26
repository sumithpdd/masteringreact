var React = require('react');
var ReactDOM = require('react-dom');
var MainHeader = require('./main_header')
var Page = require('./page')
var Orders = require('./Orders')

class App extends React.Component {
    render() {
        return <div className='app'>
            <MainHeader />
            <Page>
                <Orders />
            </Page>
        </div>
    }
}
module.exports = App;