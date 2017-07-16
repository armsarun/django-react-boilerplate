import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.css';

render(
    // browser hisory gives nice url instead of # in url
    <Router history={browserHistory} routes={routes} />,
    document.querySelector('.root')
);



