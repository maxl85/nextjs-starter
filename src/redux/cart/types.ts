export type CartItem = {
  id: number;
  name: string;
  image: string;
  type: string[];
  size: number;
  activeSize: number;
  price: number;
  count: number;
};

export interface CartState {
  items: CartItem[];
  visible: boolean;
  totalPrice: number;
}
