import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '../../components/Layout';
import { Box, Button, Container, Grid, Paper, makeStyles, TextField } from '@material-ui/core';
import Title from '../../components/dashboard/Title';
import Dashboard from '../../components/dashboard/Dashboard';
import formagentesearch from './formagentesearch';
import FormAgenteSearch from '../../components/formagentesearch/FormAgenteSearch';

const useStyles = makeStyles((theme) => ({
   
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));

const serviciosagente = () => {

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [serviciosagente, setServiciosagente] = useState([])

    

    const mostrar = () => {
      console.log('desde sericios')
      console.log(serviciosagente);
    }

    return (
        <Dashboard>
            
            
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              <Title>Servicios Agentes</Title>
              <FormAgenteSearch 
                serviciosagente={serviciosagente}
                setServiciosagente={setServiciosagente}
                />
              <Button variant="contained" color="primary" onClick={ () => mostrar()}>
                ver servicios
            </Button>
              
              </Paper>
            </Grid>
          
        </Dashboard>
    )
}

export default serviciosagente
