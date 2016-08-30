import ReactDOM from 'react-dom';
import routes from './config/routes';
import React from 'react';
import Raven from 'raven-js';

const sentryKey = 'b722323b7f40449eb820e4c64760ddfe';
const sentryApp = '95269';
var sentryUrl = 'https://' + sentryKey +'@app.getsentry.com/' + sentryApp;

Raven.config(sentryUrl).install();

ReactDOM.render(routes, document.getElementById('app'));
