import React from 'react';

import Box from '@material-ui/core/Box';
import AccordionMenu from './AccordionMenu';

import useStyles from './styles';
import { useDetalhesRestaurantesContext } from '../../Context/DetalhesRestauranteProvider';

const ListagemMenu = () => {
  const classes = useStyles();
  const { menufiltro } = useDetalhesRestaurantesContext();

  return (
    <Box className={classes.root}>
      {menufiltro?.map((menu) => (
        <AccordionMenu key={menu.groupId} menu={menu} />
      ))}
    </Box>
  );
};

export default ListagemMenu;
