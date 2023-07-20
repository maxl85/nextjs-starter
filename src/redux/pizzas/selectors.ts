import { RootState } from '../store';

export const selectPizzaz = (state: RootState) => state.pizzas.pizzas;
