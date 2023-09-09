export type ProductItemTypes = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type ProductListTypes = {
  // ku buat gini karena ini bakal kepake
  item: ProductItemTypes;
  onAddCart: (item: {}) => {};
};
