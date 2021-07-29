import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import Api from '../../../api/Api';
import { IMenu, IRestaurante } from '../../../Types';

type DetalhesRestauranteProviderProps = {
  id: string;
};

type RestauranteContextValues = {
  detalheRestaurante: IRestaurante;
  filtrarMenu(name: string): void;
  menufiltro: IMenu[];
};

const RestauranteContext = createContext<RestauranteContextValues>(
  {} as RestauranteContextValues,
);

const DetalhesRestauranteProvider = ({
  id,
  children,
}: PropsWithChildren<DetalhesRestauranteProviderProps>) => {
  const [menufiltro, setMenufiltro] = useState<IMenu[]>([]);
  const [detalheRestaurante, setDetalheRestaurante] = useState<IRestaurante>(
    {} as IRestaurante,
  );

  useEffect(() => {
    Api.get(`restaurantes/${id}`).then((res) => {
      const dados = res.data as IRestaurante;
      setDetalheRestaurante(dados);
      setMenufiltro(dados.menus);
    });
  }, [id]);

  const filtrarMenu = (name: string) => {
    const filtro = detalheRestaurante.menus.map((menu) => ({
      ...menu,
      foods: menu.foods.filter(
        (food) => food.name.toLocaleLowerCase()
          .indexOf(name.toLocaleLowerCase()) > -1,
      ),
    }));
    setMenufiltro(filtro);
  };

  const values: RestauranteContextValues = {
    detalheRestaurante,
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
      'useDetalhesRestauranteContext precisa estar abaixo de um ResturanteProvider',
    );
  }

  return context;
};

export default DetalhesRestauranteProvider;
