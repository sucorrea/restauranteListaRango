import React from 'react';
import { useParams } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import PesquisaMenu from './Components/PesquisaMenu';
import DadosRestaurante from './Components/DadosRestaurante';
import ListagemMenu from './Components/ListagemMenu';
import Header from '../../Components/Header';
import useStyles from './styles';
import DetalhesRestauranteProvider from './Context/DetalhesRestauranteProvider';

type Params = {
  id: string;
};

const DetalhesRestaurante = () => {
  const classes = useStyles();
  const { id } = useParams<Params>();

  return (
    <DetalhesRestauranteProvider id={id}>
      <Box className={classes.root}>
        <Header />
        <DadosRestaurante />
        <PesquisaMenu />
        <ListagemMenu />
      </Box>
    </DetalhesRestauranteProvider>
  );
};

export default DetalhesRestaurante;
