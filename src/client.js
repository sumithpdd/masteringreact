require("babel/polyfill");

var React = require('react');
var ReactDOM = require('react-dom');
var { Router } = require( 'react-router');
var { history } = require( 'react-router/lib/BrowserHistory');
var routes = require( './routes');
var Iso = require( 'iso');
var alt = require( './alt');

Iso.bootstrap((state, _, container) => {
  alt.bootstrap(state);

  ReactDOM.render((
    <Router history={history}>
      {routes}
    </Router>
  ), container);
});
