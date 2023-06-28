export interface INews {
  _id: number | string;
  link: string;
  title: string;
  author: string;
  date: string;
  img?: string;
}

export interface ITopNews extends INews {
  img: string;
}

export interface IHistory {
  _id: number | string;
  title: string;
  date: string;
  link?: string;
}

export interface ICafe {
  _id: number;
  address: string;
  address2?: string;
  brand: string;
  desc: string;
  sns?: string;
  link: string;
}

export interface ICarousel {
  _id: number;
  img: string;
  text?: string;
}

export interface ISocialMedia {
  _id: string;
  link: string;
  img: string;
  text: string;
}

export interface IMedia {
  _id: number;
  link: string;
  title: string;
}

export interface IResponsive {
  _id: number;
  title: string;
  describe: string;
  icon: string;
}

export type TData<T> = {
  [K: string]: T[];
};
