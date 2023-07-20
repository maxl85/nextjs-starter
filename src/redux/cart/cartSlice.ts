/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem, CartState } from './types';

const initialState: CartState = {
  visible: false,
  items: [],
  totalPrice: 0,
};

function calcTotalPrice(items: CartItem[]) {
  return items.reduce((sum, item) => item.price * item.count + sum, 0);
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push(action.payload);
      }

      // state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      state.items.splice(
        state.items.findIndex(
          item => item.id === action.payload.id && item.size === action.payload.size
        ),
        1
      );
      state.totalPrice = calcTotalPrice(state.items);
    },
    incCount: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      );
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    decCount: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      );
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const { showCart, addItem, removeItem, incCount, decCount } = cart.actions;

export default cart.reducer;
