import React from 'react';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import { useDetalhesRestauranteContext } from '../../Context/DetalhesRestauranteProvider';

const PesquisaMenu = () => {
  const classes = useStyles();
  const { filtrarMenu } = useDetalhesRestauranteContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filtrarMenu(e.target.value);
  };

  return (
    <Box className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Buscar no menu"
        onChange={handleChange}
      />
      <IconButton
        className={classes.iconButton}
        type="submit"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default PesquisaMenu;
