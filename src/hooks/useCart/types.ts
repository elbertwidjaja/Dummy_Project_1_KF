export type CartTypes = {
  title: string;
  price: number;
  id: number;
  quantity: number;
};

export type useCartTypes = {
  onAddCart: (item: CartTypes) => void;
  onUpdateCart: (itemId: number, quantityChange: number) => void;
  cart: CartTypes[];
};
