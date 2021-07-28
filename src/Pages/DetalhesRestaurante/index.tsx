import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import PesquisaMenu from './Components/PesquisaMenu';
import CardRestaurante from './Components/DadosRestauranteCard';
import Menu from './Components/ListagemMenu';
import Header from '../../components/Header';
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
          <CardRestaurante />
        </Box>
        <Box className={classes.root}>
          <PesquisaMenu />
        </Box>
        <Menu />
      </Box>
    </DetalhesRestauranteProvider>
  );
};

export default DetalhesRestaurante;
