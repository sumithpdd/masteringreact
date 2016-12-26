var React = require('react');
var ReactDOM = require('react-dom');
var MainHeader = require('./main_header')
var Page = require('./page')

class App extends React.Component {
    render() {
        return <div className='app'>
            <MainHeader />
            <Page>
            <h1>Page title</h1>
            </Page>
        </div>
    }
}
module.exports = App;