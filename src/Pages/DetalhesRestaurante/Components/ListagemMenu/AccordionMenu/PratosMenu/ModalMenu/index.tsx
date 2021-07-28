import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import { formatToBRL } from 'brazilian-values';
import useStyles from './styles';

type ModalMenuProps = {
  handleClose: () => void;
  handleAdicionar: () => void;
  handleRemover: () => void;
  name: string;
  image: string;
  price: number;
  open: boolean;
  contador: number;
};
const ModalMenu = ({
  image, name, price, handleClose, handleAdicionar, handleRemover, open, contador,
}: ModalMenuProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth="xs">
        <Box className={classes.imageWrapperModal}>
          <img className={classes.imageModal} src={image} alt={name} />
        </Box>
        <Box className={classes.nameWrapper}>
          <Typography className={classes.nameModal}>{name}</Typography>
        </Box>
        <Box className={classes.desricaoPrecoWrapper}>
          <Typography className={classes.descricaoModal}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </Typography>
          <Typography color="primary" className={classes.precoModal}>
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
