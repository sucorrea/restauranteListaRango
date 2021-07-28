import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PesquisaRestaurantes from './Components/PesquisaRestaurantes';
import Restaurantes from './Components/RestauranteInformações/RestaurantesLista';
import Header from '../../components/Header';
import useStyles from './styles';
import ListagemRestauranteProvider from './Context/ListagemRestaurantesProvider';

const ListagemRestaurantes = () => {
  const classes = useStyles();
  return (
    <ListagemRestauranteProvider>
      <Box>
        <Header />
        <Box className={classes.root}>
          <Typography color="textSecondary" variant="h5" align="center">Bem-vindo ao Lista Rango</Typography>
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
