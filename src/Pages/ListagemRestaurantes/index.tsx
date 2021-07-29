import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Header from '../../components/Header';
import ListagemRestauranteProvider from './Context/ListagemRestaurantesProvider';
import PesquisaRestaurantes from './Components/PesquisaRestaurantes';
import Restaurantes from './Components/RestauranteInformações/RestaurantesLista';
import useStyles from './styles';

const ListagemRestaurantes = () => {
  const classes = useStyles();

  return (
    <ListagemRestauranteProvider>
      <Box>
        <Header />
        <Box className={classes.root}>
          <Typography
            color="textSecondary"
            variant="h5"
            align="center"
          >
            Bem-vindo ao Lista Rango
          </Typography>
          <PesquisaRestaurantes texto="Buscar estabelecimento" />
          <Box>
            <Restaurantes />
          </Box>
        </Box>
      </Box>
    </ListagemRestauranteProvider>
  );
};

export default ListagemRestaurantes;
