import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartAddState {
  id: string | number;
  name: string;
  image: string;
  info: string;
}

interface CartRemoveState {
  id: string | number;
  name: string;
  image: string;
  info: string;
}

const initialState: CartAddState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartAddState>) => {
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<CartRemoveState>) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;