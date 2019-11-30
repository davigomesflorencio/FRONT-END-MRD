import React from 'react';
import { CssBaseline, Card, CardContent, makeStyles, TextareaAutosize, Grid, FormControl, Input, InputLabel, Button } from '@material-ui/core';
import Navbar from './components/Navbar'


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


function App() {

  const classes = useStyles();

  return (

    <div>
      <Navbar /><br />
      <CssBaseline />
      <container maxWidth="sm" className={classes.container}>
        <Card className={classes.card}>
          <CardContent>

            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '50vh' }}
            >

              <Grid item={12}>

                <FormControl>
                  <InputLabel htmlForm="data">Data</InputLabel>
                  <Input id="data" />
                </FormControl>
                <br />
                <br />
                <FormControl>
                  <TextareaAutosize rows={3} rowsMax={4} placeholder="Descrição" id="descricao" />
                </FormControl>
                <br />


                <Button className={classes.bt} size="medium" variant="contained" color="primary">
                  SALVAR
          </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </container>
    </div>

  );
}

export default App;
