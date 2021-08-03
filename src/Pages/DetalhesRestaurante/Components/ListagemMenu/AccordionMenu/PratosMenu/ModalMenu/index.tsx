import React, { useState } from 'react';
import { formatToBRL } from 'brazilian-values';

import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

type ModalMenuProps = {
  handleClose: () => void;
  open: boolean;
  name: string;
  image: string;
  price: number;
};
const ModalMenu = ({
  image,
  name,
  price,
  handleClose,
  open,
}: ModalMenuProps) => {
  const classes = useStyles();
  const [contador, setContador] = useState(1);

  const handleAdicionar = () => {
    setContador((prevContador) => prevContador + 1);
  };

  const handleRemover = () => {};
  setContador((prevContador) => {
    if (prevContador > 0) {
      return prevContador - 1;
    }
    return prevContador;
  });

  return (
    <Box>
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth="xs">
        <Box className={classes.imageWrapperModal}>
          <img className={classes.imageModal} src={image} alt={name} />
        </Box>
        <Box className={classes.nameWrapper}>
          <Typography variant="h5" className={classes.nameModal}>
            {name}
          </Typography>
        </Box>
        <Box className={classes.desricaoPrecoWrapper}>
          <Typography variant="caption">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            className={classes.precoModal}
          >
            {price !== undefined ? formatToBRL(price) : 'Preço não informado'}
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
            {` Adicionar ${
              price !== undefined ? formatToBRL(contador * price) : 'R$ 0,00'
            }`}
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ModalMenu;
