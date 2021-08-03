import React from 'react';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import { useListagemRestauranteContext } from '../../Context/ListagemRestaurantesProvider';

type PesquisaProps = {
  texto: string;
};

const PesquisaRestaurantes = ({ texto }: PesquisaProps) => {
  const classes = useStyles();
  const context = useListagemRestauranteContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    context.filtrarRestaurante(e.target.value);
  }

  return (
    <Box className={classes.presquisa}>
      <InputBase
        className={classes.input}
        placeholder={texto}
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

export default PesquisaRestaurantes;
