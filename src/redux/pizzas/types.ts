export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number[];
  type: string[];
  sizes: number[];
  activeSize: number;
  image: string;
}

export interface PizzasState {
  pizzas: Pizza[];
}
