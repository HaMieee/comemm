import { createSlice } from "@reduxjs/toolkit";

const initState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart: (state, action) => {
      action.payload.amount = 1
      state.items.push(action.payload);
    },
    updateCart: (state, action) => {
        let product = state.items.find(item => item.id == action.payload)
        if(product) {
            product.amount = product.amount + 1
        }
    },
    removeCart: (state, action) => {
      let product = state.items.find(item => item.id == action.payload)
      if(product) {
          product.amount = product.amount - 1
      }
  }
  },
});

export const { addToCart, updateCart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
