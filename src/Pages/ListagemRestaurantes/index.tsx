import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Header from '../../Components/Header';
import ListagemRestauranteProvider from './Context/ListagemRestaurantesProvider';
import PesquisaRestaurantes from './Components/PesquisaRestaurantes';
import useStyles from './styles';
import RestaurantesLista from './Components/RestaurantesLista';

const ListagemRestaurantes = () => {
  const classes = useStyles();

  return (
    <ListagemRestauranteProvider>
      <Header />
      <Box className={classes.root}>
        <Typography color="textSecondary" variant="h5" align="center">
          Bem-vindo ao Lista Rango
        </Typography>
        <PesquisaRestaurantes />
        <RestaurantesLista />
      </Box>
    </ListagemRestauranteProvider>
  );
};

export default ListagemRestaurantes;
