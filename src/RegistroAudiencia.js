import React from 'react';
import { TextareaAutosize, Grid, FormControl, Input, InputLabel, Button } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (

    <div>
      <Navbar /><br />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item={12}>

          <FormControl>
            <InputLabel htmlForm="data">Data</InputLabel>
            <Input id="data" />
          </FormControl>
          <br />
          <FormControl>
            <TextareaAutosize placeholder="Descrição" id="descricao" />
          </FormControl>
          <br />
          
          <Button color="primary">
            SALVAR
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
