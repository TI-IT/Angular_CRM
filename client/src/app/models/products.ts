export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProducts {
  id: number;
  title: string;
  price: number;
  image?: string;
  configure: IProductsConfig;
}

export interface IProductsConfig {
  chip: string;
  ssd: string;
  memory: string;
  display: string;
}
