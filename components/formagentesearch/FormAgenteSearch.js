import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
      },
      button: {
        margin: theme.spacing(1),
      },
    },
  }));

const FormAgenteSearch = (props) => {
    const classes = useStyles();

    

    const consultarapi = async() => {
      const response = await fetch(`http://172.16.165.202:8080/jsage/api/servicio/documento/32055277/organizacion/-1/activos/false/usuario/34721520`);
      const json = await response.json();
      console.log(json);
      console.log('hola');

      props.setServiciosagente(json);

    }
    

    return (
        <form noValidate autoComplete="off">

            <TextField id="outlined-basic" type="number" label="Documento Agente" variant="outlined" />
            <Button variant="contained" size="small" color="primary" className={classes.button}>
                ...
            </Button>
            <Button variant="contained" color="primary" onClick={ () => consultarapi()}>
                Buscar
            </Button>
        </form>
    )
}

export default FormAgenteSearch
