import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  //   pizzas: [
  //     {
  //       pizzaId: 12,
  //       name: "Mediterranean",
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
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
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantitiy(state, action) {
      const item = state.pizzas.find((item) => item.pizzaId == action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
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
export const getCart = (state) => state.cart.pizzas;
export default cartSlice.reducer;
export const getTotalCartQuantity = (state) =>
  state.cart.pizzas.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.pizzas.reduce((sum, item) => sum + item.totalPrice, 0);
export const getQuantityById = (id) => (state) =>
  state.cart.pizzas.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;
