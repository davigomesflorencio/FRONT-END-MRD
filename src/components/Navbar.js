import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: '10px',
    }
}));

export default function Navbar() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        MRD Advogados
                        <Button color="inherit" className={classes.link}>
                            Processos
                        </Button>
                    </Typography>
                   
                </Toolbar>
            </AppBar>
        </div>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="/">MRD - Advogados</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item">
        //                 <a className="nav-link" href="/"> Inicio </a>
        //             </li>
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="/substituiradvogado"><span className="sr-only">(current)</span>substituir advogado</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="/"> Custas </a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="/"> Processos </a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}
