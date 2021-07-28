import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import Api from '../../../api/Api';
import { IRestaurante } from '../../../Types';

type RestauranteContextValues = {
  restaurantes: IRestaurante[];
  filtrarRestaurante(name: string): void;
};

const RestauranteContext = createContext<RestauranteContextValues>(
  {} as RestauranteContextValues,
);

const ListagemRestauranteProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [restaurantesfiltro, setRestaurantesfiltro] = useState<IRestaurante[]>([]);
  useEffect(() => {
    Api.get('/restaurantes/').then((res) => {
      setRestaurantesfiltro(res.data);
      setRestaurantes(res.data);
    });
  }, []);
  const filtrarRestaurante = (name: string) => {
    const filtro = restaurantes.filter((restaurante) => restaurante.name.toLocaleLowerCase().indexOf(name.toLowerCase()) > -1);
    setRestaurantesfiltro(filtro);
  };
  const values: RestauranteContextValues = {
    restaurantes: restaurantesfiltro,
    filtrarRestaurante,
  };

  return (
    <RestauranteContext.Provider value={values}>
      {children}
    </RestauranteContext.Provider>
  );
};

export const useListagemRestauranteContext = () => {
  const context = useContext(RestauranteContext);

  if (!context) {
    throw new Error(
      'useRestauranteContext precisa estar abaixo de um ResturanteProvider',
    );
  }

  return context;
};

export default ListagemRestauranteProvider;
