import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';
import { useListagemRestaurantesContext } from '../../Context/ListagemRestaurantesProvider';
import RestauranteInformacoes from './RestauranteInformacoes';

const RestaurantesLista = () => {
  const classes = useStyles();
  const { restaurantes } = useListagemRestaurantesContext();

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        {restaurantes.map((restaurante) => (
          <RestauranteInformacoes
            key={restaurante.id}
            restaurantes={restaurante}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantesLista;
