import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import logo from './assets/img/user.png';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    container: {
        'margin-top': '10%',
        display: "flex",
        'flex-direction': "row",
        'justify-content': 'center',
        'align-items': 'center',
    },
    divlink: {
        'margin-top': '10px',
        'margin-bottom': '20px',
        width: '100%',
    },
    avatar: {
        width: '200px',
        height: '200px',
        margin: '0 auto',
    },
    bt: {
        margin: '20px auto',
        width: '50%',
        'margin-left': '25%',
        'margin-right': '25%',
    }
}));
function Login() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.container}>
                <Card className={classes.card}>
                    <CardContent>
                        <Avatar className={classes.avatar} src={logo} />

                        <form noValidate autoComplete="off">
                            <div>
                                <TextField
                                    variant="filled"
                                    required
                                    id="standard-required"
                                    label="Email"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    variant="filled"
                                    required
                                    id="standard-required"
                                    label="Senha"
                                    className={classes.textField}
                                    margin="normal"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </div>
                        </form>
                    </CardContent>
                    <div>
                        <Button className={classes.bt} size="medium" variant="contained" color="primary">Login</Button>
                    </div>
                    <div>
                        <Link
                            className={classes.divlink}
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}>
                            Não possui cadastro? clique aqui
                         </Link>
                    </div>
                </Card>

            </Container>
        </React.Fragment>

    )
}

export default Login;