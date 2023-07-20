/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';

import cart from './cart/cartSlice';
import filter from './filter/filterSlice';
import pizzas from './pizzas/pizzasSlice';

export const store = configureStore({
  reducer: {
    cart,
    filter,
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
