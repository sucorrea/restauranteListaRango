import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { useQuery } from 'react-query';

import Api from '../../../api';
import { IRestaurante, HttpResponse } from '../../../Types';

type ListagemRestaurantesContextValues = {
  restaurantes: IRestaurante[];
  filtrarRestaurante: (name: string) => void;
};

const RestauranteContext = createContext<ListagemRestaurantesContextValues>(
  {} as ListagemRestaurantesContextValues,
);

const ListagemRestaurantesProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [restaurantesfiltro, setRestaurantesfiltro] = useState<IRestaurante[]>(
    [],
  );

  async function BuscaRestaurantes(): Promise<HttpResponse<IRestaurante[]>> {
    const dados: HttpResponse<IRestaurante[]> = await Api.get('restaurantes');

    return dados;
  }

  const { data } = useQuery('dados-todos-restaurantes', () => BuscaRestaurantes(), {
    onSuccess: (dataSucesso) => {
      setRestaurantesfiltro(dataSucesso.data);
    },
  });

  const filtrarRestaurante = (name: string) => {
    const filtro = data?.data.filter(
      (restaurante) => restaurante.name.toLocaleLowerCase().indexOf(name.toLowerCase()) > -1,
    );
    setRestaurantesfiltro(filtro || []);
  };

  const values: ListagemRestaurantesContextValues = {
    restaurantes: restaurantesfiltro,
    filtrarRestaurante,
  };

  return (
    <RestauranteContext.Provider value={values}>
      {children}
    </RestauranteContext.Provider>
  );
};

export const useListagemRestaurantesContext = () => {
  const context = useContext(RestauranteContext);

  if (!context) {
    throw new Error(
      'useListagemRestaurantesContext precisa estar abaixo de um ListagemRestaurantesProvider',
    );
  }

  return context;
};

export default ListagemRestaurantesProvider;
