import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 500,
    marginLeft: '100px',
  },
}));

function createRow(id,titulo,desc,total){
    return {id,titulo,desc,total};
}

const rows = [
  createRow(1,'Ofença', 'Me chamou de feio', 100.0),
  createRow(0,'Ofença', 'Me chamou de bolsominion', 300.0),
];

export default class RegistroDeCustas extends React.Component {
 render() {

    return (
        <div>
            <Navbar/>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Titulo</TableCell>
                            <TableCell align="right">Descrição</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => (
                        <TableRow>
                            <TableCell>{row.titulo}</TableCell>
                            <TableCell align="right">{row.desc}</TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
            <a href="/registrocustas">
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </a>
        </div>
        );
    }
}