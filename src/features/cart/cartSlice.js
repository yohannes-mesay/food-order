import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.pizzas.push(action.payload);
    },
    deleteItem(state, action) {
      const newItems = state.pizzas.filter(
        (pizza) => pizza.pizzaId != action.payload,
      );
      state.pizzas = newItems;
    },
    increateItemQuantitiy(state, action) {
      const item = state.pizzas.find((item) => item.pizzaId == action.payload);
      item.quantitiy++;
      item.totalPrice = item.quantitiy * item.unitPrice;
    },
    decreaseItemQuantitiy(state, action) {
      const item = state.pizzas.find((item) => item.pizzaId == action.payload);
      item.quantitiy--;
      item.totalPrice = item.quantitiy * item.unitPrice;
    },
    clearCart(state) {
      state.pizzas = [];
    },
  },
});
export const {
  addToCart,
  deleteItem,
  increateItemQuantitiy,
  decreaseItemQuantitiy,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
