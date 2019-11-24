import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 500,
    marginLeft: '100px',
  },
}));

function createRow(titulo,desc,total){
    return {titulo,desc,total};
}

const rows = [
  createRow(1,'Ofença', 'Me chamou de feio', 100.0),
  createRow(2,'Ofença', 'Me chamou de bolsominion', 300.0),
];

export default class RegistroDeCustas extends React.Component {  
 render() {

    return (
        <div>
            <Navbar/>
                <form>
                    <TextField
                        className="titulo"
                        label="Titulo"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /><br/>
                    <TextField
                        className="desc"
                        label="Descrição"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /><br/>
                    <TextField
                        className="entrada"
                        label="Total"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /><br/>
                    <Button variant="contained" color="primary">Criar Custa</Button>
                </form>
                <Button variant="contained" color="secondary" href="/listarcustas">Listar Custas</Button>
                
        </div>
        );
    }
}