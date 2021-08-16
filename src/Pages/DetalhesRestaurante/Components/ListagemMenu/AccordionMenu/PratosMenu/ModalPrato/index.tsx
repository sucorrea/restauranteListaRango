import React, { useMemo, useState, useCallback } from 'react';
import { formatToBRL } from 'brazilian-values';

import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import { IFood } from '../../../../../../../Types';

type ModalMenuProps = {
  handleClose: () => void;
  open: boolean;
  foods: IFood;
};

const ModalPrato = ({ foods, handleClose, open }: ModalMenuProps) => {
  const classes = useStyles();
  const [contador, setContador] = useState(1);

  const handleAdicionar = () => {
    setContador((prevContador) => prevContador + 1);
  };

  const handleRemover = useCallback(() => {
    setContador((prevContador) => {
      if (prevContador > 0) {
        return prevContador - 1;
      }
      return prevContador;
    });
  }, []);

  const precoPrato = useMemo(() => {
    if (foods.price) {
      return formatToBRL(foods.price);
    }
    return 'Preço não informado';
  }, [foods]);

  const precoPratoBotao = useMemo(() => {
    if (foods.price) {
      return formatToBRL(contador * foods.price);
    }
    return 'R$ 0,00';
  }, [foods, contador]);

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="xs">
      <Box className={classes.imageWrapperModal}>
        <img
          className={classes.imageModal}
          src={foods.image}
          alt={foods.name}
        />
      </Box>
      <Box className={classes.nameWrapper}>
        <Typography variant="h5" className={classes.nameModal}>
          {foods.name}
        </Typography>
      </Box>
      <Box className={classes.desricaoPrecoWrapper}>
        <Typography variant="caption">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </Typography>
        <Typography variant="h6" color="primary" className={classes.precoModal}>
          {precoPrato}
        </Typography>
      </Box>
      <Box className={classes.botaoWrapper}>
        <Button>
          <Button color="primary" size="small" onClick={handleRemover}>
            <RemoveIcon />
          </Button>
          <Typography align="center" variant="h6" color="primary">
            {contador}
          </Typography>
          <Button color="primary" size="small" onClick={handleAdicionar}>
            <AddIcon />
          </Button>
        </Button>
        <Button variant="contained" size="large" color="primary">
          {`Adicionar ${precoPratoBotao}`}
        </Button>
      </Box>
    </Dialog>
  );
};

export default ModalPrato;
