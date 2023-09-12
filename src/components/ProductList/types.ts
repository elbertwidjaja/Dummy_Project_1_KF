export type ProductItemTypes = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type ProductListTypes = {
  item: ProductItemTypes;
  onAddCart: (item: ProductItemTypes) => void;
};
