import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SubstituirAdvogado from './SubstituirAdvogado';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/substituiradvogado" exact={true} component={SubstituirAdvogado} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));