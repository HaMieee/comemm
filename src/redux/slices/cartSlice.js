import { createSlice } from "@reduxjs/toolkit";

const initState = {
  items: {},
  isLoading:false,
  isError:false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    getToCartPending: (state) => {
      state.isLoading = true;
    },
    getToCartSuccess: (state, action) => {
      state.items = action.payload
      state.isLoading = false;
    },
    getToCartError: (state, action) => {
      state.isError = action.payload;
    },
    addToCartPending: (state) => {
      state.isLoading = true;
    },
    addToCartSuccess: (state, action) => {
      state.items.push(action.payload);
    },
    addToCartError: (state, action) => {
      state.isError = action.payload;
    },
    updateCart: (state, action) => {
      let product = state.items.find((item) => item.id == action.payload);
      if (product) {
        product.amount = product.amount + 1;
      }
    },
    removeCart: (state, action) => {
      let product = state.items.find((item) => item.id == action.payload);
      if (product) {
        product.amount = product.amount - 1;
      }
    },
  },
});

export default cartSlice.reducer;

export const cartAction = cartSlice.actions;

