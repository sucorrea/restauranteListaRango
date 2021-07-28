import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { IDay, IRestaurante } from '../../../../Types';
import { useListagemRestauranteContext } from '../../Context/ListagemRestaurantesProvider';

const RestauranteInformações = ({
  id, name, image, address,
} : IRestaurante) => {
  const classes = useStyles();
  const { restaurantes } = useListagemRestauranteContext();
  const dataAtual = new Date();
  const checaDia = restaurantes[0].hours[0].days.indexOf(
    new Date().getDay() as IDay,
  );
  const horaAbre = Number(restaurantes[0].hours[0].from.substring(0, 2));
  const minutoAbre = Number(restaurantes[0].hours[0].from.substring(3, 5));
  const horarioAbertura = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth(),
    dataAtual.getDate(),
    horaAbre,
    minutoAbre,
  );
  const horaFecha = Number(restaurantes[0].hours[0].to.substring(0, 2));
  const minutoFecha = Number(restaurantes[0].hours[0].to.substring(3, 5));
  const horarioFechamento = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth(),
    dataAtual.getDate(),
    horaFecha,
    minutoFecha,
  );

  return (
    <Link to={`/restaurantes/${Number(id)}`} className={classes.root}>
      <Grid item xs={6} sm={3}>
        <Badge
          color="primary"
          badgeContent={
            checaDia >= 0
            && dataAtual > horarioAbertura
            && dataAtual < horarioFechamento
              ? 'Aberto'
              : 'Fechado'
          }
        >
          <Paper className={classes.paper}>
            <Box className={classes.imageWrapper}>
              <img className={classes.image} src={image} alt={name} />
            </Box>
            <Box className={classes.nameWrapper}>
              <Typography className={classes.name}>{name}</Typography>
              <Typography className={classes.address}>{address}</Typography>
            </Box>
          </Paper>
        </Badge>
      </Grid>
    </Link>
  );
};

export default RestauranteInformações;
