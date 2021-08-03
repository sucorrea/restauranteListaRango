import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import { IRestaurante } from '../../../../Types';
import { DisponibilidadeRestaurante } from './DisponibilidadeRestaurante';

const RestauranteInformações = ({
  id, name, image, address, hours,
} : IRestaurante) => {
  const classes = useStyles();

  return (
    <Link to={`/restaurantes/${Number(id)}`} className={classes.root}>
      <Grid item xs={6} sm={3}>
        <Badge
          color="primary"
          badgeContent={DisponibilidadeRestaurante(hours)}
        >
          <Paper className={classes.paper}>
            <Box className={classes.imageWrapper}>
              <img
                className={classes.image}
                src={image}
                alt={name}
              />
            </Box>
            <Box className={classes.nameWrapper}>
              <Typography
                className={classes.name}
                variant="subtitle1"
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
              >
                {address}
              </Typography>
            </Box>
          </Paper>
        </Badge>
      </Grid>
    </Link>
  );
};

export default RestauranteInformações;
