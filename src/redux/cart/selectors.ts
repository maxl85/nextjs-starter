import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;
export const selectCartVisible = (state: RootState) => state.cart.visible;
