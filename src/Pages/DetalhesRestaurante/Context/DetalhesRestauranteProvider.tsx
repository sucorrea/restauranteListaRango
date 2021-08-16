import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { useQuery } from 'react-query';

import Api from '../../../api';
import { IMenu, IRestaurante } from '../../../Types';

type DetalhesRestauranteProviderProps = {
  id: string;
};

type DetalhesRestauranteContextValues = {
  filtrarMenu: (name: string) => void;
  menufiltro: IMenu[];
  detalhesRestaurante: IRestaurante;
};

type HttpResponse<T> = {
  data: T;
};

const RestauranteContext = createContext<DetalhesRestauranteContextValues>(
  {} as DetalhesRestauranteContextValues,
);

const DetalhesRestaurantesProvider = ({
  id,
  children,
}: PropsWithChildren<DetalhesRestauranteProviderProps>) => {
  const [menufiltro, setMenufiltro] = useState<IMenu[]>([]);

  async function BuscaRestaurante(): Promise<HttpResponse<IRestaurante>> {
    const dados: HttpResponse<IRestaurante> = await Api.get(
      `restaurantes/${id}`,
    );

    return dados;
  }

  const { data } = useQuery('dados-detalhes-restaurante', () => BuscaRestaurante(), {
    onSuccess: (dataSucesso) => {
      setMenufiltro(dataSucesso.data.menus);
    },
  });

  const filtrarMenu = (name: string) => {
    const filtro = data?.data.menus.map((menu) => ({
      ...menu,
      foods: menu.foods.filter(
        (food) => food.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1,
      ),
    }));

    setMenufiltro(filtro || []);
  };

  const values: DetalhesRestauranteContextValues = {
    detalhesRestaurante: data?.data || ({} as IRestaurante),
    menufiltro,
    filtrarMenu,
  };

  return (
    <RestauranteContext.Provider value={values}>
      {children}
    </RestauranteContext.Provider>
  );
};

export const useDetalhesRestauranteContext = () => {
  const context = useContext(RestauranteContext);

  if (!context) {
    throw new Error(
      'useDetalhesRestauranteContext precisa estar abaixo de um RestauranteProvider',
    );
  }

  return context;
};

export default DetalhesRestaurantesProvider;
