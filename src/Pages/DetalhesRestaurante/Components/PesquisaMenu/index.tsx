import React from 'react';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import { useDetalhesRestauranteContext } from '../../Context/DetalhesRestauranteProvider';

const PesquisaMenu = () => {
  const classes = useStyles();
  const context = useDetalhesRestauranteContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    context.filtrarMenu(e.target.value);
  }

  return (
    <Box className={classes.presquisa}>
      <InputBase
        className={classes.input}
        placeholder="Buscar no menu"
        onChange={handleChange}
      />
      <IconButton
        className={classes.iconButton}
        type="submit"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default PesquisaMenu;
