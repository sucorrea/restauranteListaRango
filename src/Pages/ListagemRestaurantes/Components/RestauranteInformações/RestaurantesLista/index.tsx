import React from 'react';

import Grid from '@material-ui/core/Grid';

import Restaurante from '../index';
import useStyles from './styles';
import { useListagemRestauranteContext } from '../../../Context/ListagemRestaurantesProvider';

const RestaurantesLista = () => {
  const classes = useStyles();
  const { restaurantes } = useListagemRestauranteContext();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {restaurantes.map((restaurante) => (
          <Restaurante key={restaurante.id} {...restaurante} />
        ))}
      </Grid>
    </div>
  );
};

export default RestaurantesLista;
