import React from 'react';

import Box from '@material-ui/core/Box';
import AccordionMenu from './AccordionMenu';

import useStyles from './styles';
import { useDetalhesRestauranteContext } from '../../Context/DetalhesRestauranteProvider';

const ListagemMenu = () => {
  const classes = useStyles();
  const { menufiltro } = useDetalhesRestauranteContext();

  return (
    <Box className={classes.root}>
      {menufiltro.map((menu) => (
        <AccordionMenu
          menu={menu}
        />
      ))}
    </Box>
  );
};

export default ListagemMenu;
