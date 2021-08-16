import React, { useMemo, useState } from 'react';
import { formatToBRL } from 'brazilian-values';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import { IFood } from '../../../../../../Types';
import ModalMenu from './ModalPrato';

type PratosMenuProps = {
  foods: IFood;
};

const PratosMenu = ({ foods }: PratosMenuProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const precoPrato = useMemo(() => {
    if (foods.price) {
      return formatToBRL(foods.price);
    }
    return 'Preço não informado';
  }, [foods]);

  return (
    <>
      <Grid item xs={6} sm={3}>
        <Box className={classes.paper} onClick={handleOpen}>
          <Box className={classes.imageWrapper}>
            <img className={classes.image} src={foods.image} alt={foods.name} />
          </Box>
          <Box className={classes.nameWrapper}>
            <Typography className={classes.name}>{foods.name}</Typography>
            <Typography variant="caption">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography className={classes.preco} color="primary">
              {precoPrato}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <ModalMenu open={open} handleClose={handleClose} foods={foods} />
    </>
  );
};

export default PratosMenu;
