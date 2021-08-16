export type HttpResponse<T> = {
  data: T;
};
export type IDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ISale = {
  description: string;
  price: number;
  hours: IHour[];
};

export type IFood = {
  foodId?: number;
  name: string;
  image: string;
  price: number;
  sales?: ISale[];
};

export type IMenu = {
  groupId: number;
  group: string;
  foods: IFood[];
};

export type IHour = {
  from: string;
  to: string;
  days: IDay[];
};

export type IRestaurante = {
  id: number;
  name: string;
  address: string;
  hours: IHour[];
  image: string;
  menus: IMenu[];
};
