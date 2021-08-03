import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import { NomeDiaSemana } from '../../../../Utils/NomeDiaSemana';
import { useDetalhesRestauranteContext } from '../../Context/DetalhesRestauranteProvider';

const DadosRestauranteCard = () => {
  const classes = useStyles();
  const { detalheRestaurante } = useDetalhesRestauranteContext();

  return (
    <Box className={classes.root}>
      <Box className={classes.imageWrapper}>
        <img
          className={classes.image}
          src={detalheRestaurante.image}
          alt="Foto Restaurante"
        />
        <Box className={classes.nameWrapper}>
          <Typography
            variant="h5"
            className={classes.name}
          >
            {detalheRestaurante.name}
          </Typography>
          <Typography
            variant="h6"
          >
            {detalheRestaurante.address}
          </Typography>
          {detalheRestaurante.hours?.map((hour) => (
            <Typography
              variant="body2"
            >
              {`${NomeDiaSemana[hour.days[0]]} à ${
                NomeDiaSemana[hour.days[hour.days.length - 1]]}: ${
                hour.from} às ${hour.to}`}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DadosRestauranteCard;
