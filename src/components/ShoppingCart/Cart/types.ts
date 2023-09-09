export type CartTypes = {
  cartVisible: boolean;
  toggleCart: () => void;
  cart: {
    title: string;
    price: number;
    id: number;
    quantity: number;
  }[];
  onUpdateCart: (itemId: number, quantityChange: number) => void;
};
