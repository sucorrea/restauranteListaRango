import React from 'react';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import { useListagemRestaurantesContext } from '../../Context/ListagemRestaurantesProvider';

const PesquisaRestaurantes = () => {
  const classes = useStyles();
  const { filtrarRestaurante } = useListagemRestaurantesContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filtrarRestaurante(e.target.value);
  };

  return (
    <Box className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Pesquisa Menu"
        onChange={handleChange}
      />
      <IconButton className={classes.iconButton} type="submit">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default PesquisaRestaurantes;
