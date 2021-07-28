import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import CollapseMenu from './AccordionMenu';
import { useDetalhesRestauranteContext } from '../../Context/DetalhesRestauranteProvider';

const ListagemMenu = () => {
  const classes = useStyles();
  const { menufiltro } = useDetalhesRestauranteContext();

  return (
    <Box className={classes.root}>
      {menufiltro.map((menu) => (
        <CollapseMenu menu={menu} />
      ))}
    </Box>
  );
};

export default ListagemMenu;
