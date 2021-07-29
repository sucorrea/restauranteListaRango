import React, { useState } from 'react';
import { formatToBRL } from 'brazilian-values';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import { IFood } from '../../../../../../Types';
import ModalMenu from './ModalMenu';

const PratosMenu = ({ image, name, price }: IFood) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Grid item xs={6} sm={3}>
        <Box
          className={classes.paper}
          onClick={handleOpen}
        >
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
            >
              {name}
            </Typography>
            <Typography
              variant="caption"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography
              className={classes.preco}
              color="primary"
            >
              {price !== undefined ? formatToBRL(price) : 'Preço não informado'}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Box>
        <ModalMenu
          open={open}
          handleClose={handleClose}
          image={image}
          name={name}
          price={price}
        />
      </Box>
    </Box>
  );
};

export default PratosMenu;
