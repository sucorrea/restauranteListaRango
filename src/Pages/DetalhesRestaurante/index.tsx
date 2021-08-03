import React from 'react';
import { useParams } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import PesquisaMenu from './Components/PesquisaMenu';
import DadosRestauranteCard from './Components/DadosRestauranteCard';
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
      <Box>
        <Header />
        <Box className={classes.cardrestaurante}>
          <DadosRestauranteCard />
        </Box>
        <Box className={classes.root}>
          <PesquisaMenu />
        </Box>
        <ListagemMenu />
      </Box>
    </DetalhesRestauranteProvider>
  );
};

export default DetalhesRestaurante;
