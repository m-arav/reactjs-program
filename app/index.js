var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var Raven = require('raven-js');

var sentryKey = 'b722323b7f40449eb820e4c64760ddfe';
var sentryApp = '95269';
var sentryUrl = 'https://' + sentryKey +'@app.getsentry.com/' + sentryApp;

Raven.config(sentryUrl).install();

ReactDOM.render(routes, document.getElementById('app'));
