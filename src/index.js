import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import SubstituirAdvogado from './SubstituirAdvogado';
import RegistroAudiencia from './RegistroAudiencia';
import Login from './Login';
import CadastroAdvogado from './CadastroAdvogado';
import RegistroCustas from './RegistroCustas';
import ListarCustas from './ListarCustas';


import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/substituiradvogado" exact={true} component={SubstituirAdvogado} />
            <Route path="/registroaudiencia" exact={true} component={RegistroAudiencia} />
            <Route path="/cadastroadvogado" exact={true} component={CadastroAdvogado} />
            <Route path="/registrocustas" exact={true} component={RegistroCustas} />
            <Route path="/listarcustas" exact={true} component={ListarCustas} />
            <Route path="/login" exact={true} component={Login} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));