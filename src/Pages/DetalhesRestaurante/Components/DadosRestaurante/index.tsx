import React, { useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import { NomeDiaSemana } from '../../../../Utils/NomeDiaSemana';
import { useDetalhesRestauranteContext } from '../../Context/DetalhesRestauranteProvider';
import { IHour } from '../../../../Types';

const DadosRestaurante = () => {
  const classes = useStyles();
  const { detalhesRestaurante } = useDetalhesRestauranteContext();

  const diasAberto = useCallback((hour: IHour) => {
    return `${NomeDiaSemana[hour.days[0]]} à ${
      NomeDiaSemana[hour.days[hour.days.length - 1]]
    }: ${hour.from} às ${hour.to}`;
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.imageWrapper}>
        <img
          className={classes.image}
          src={detalhesRestaurante?.image}
          alt={detalhesRestaurante?.name}
        />
        <Box className={classes.nameWrapper}>
          <Typography variant="h5" className={classes.name}>
            {detalhesRestaurante?.name}
          </Typography>
          <Typography variant="h6">{detalhesRestaurante?.address}</Typography>
          {detalhesRestaurante?.hours?.map((hour) => (
            <Typography variant="body2">{diasAberto(hour)}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DadosRestaurante;
