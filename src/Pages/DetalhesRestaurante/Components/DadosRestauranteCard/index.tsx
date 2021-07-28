import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { NomeDiaDaSemana } from '../../../../Utils/NomeDiaDaSemana';
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
          <Typography className={classes.name}>
            {detalheRestaurante.name}
          </Typography>
          <Typography className={classes.address}>
            {detalheRestaurante.address}
          </Typography>
          {detalheRestaurante.hours?.map((hour) => (
            <Typography className={classes.funcionamento}>
              {`${NomeDiaDaSemana[hour.days[0]]} à ${NomeDiaDaSemana[hour.days[hour.days.length - 1]]}: ${hour.from} às ${hour.to}`}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DadosRestauranteCard;