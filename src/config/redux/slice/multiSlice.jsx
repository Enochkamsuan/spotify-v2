import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPaymentStatus: false,
  items: [],
  totalQuantity: localStorage.getItem("productquantity")
    ? parseInt(localStorage.getItem("productquantity"))
    : 0,
  clickedImage: null,
};

const multiSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setShowPaymentStatus(state, action) {
      state.showPaymentStatus = action.payload;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity++;
      localStorage.setItem("productquantity", state.totalQuantity);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      state.totalQuantity--;
    },
    setClickedImage(state, action) {
      state.clickedImage = action.payload;
      localStorage.setItem("clickedImage", action.payload);
    },
  },
});
export const {
  setShowPaymentStatus,
  addToCart,
  removeFromCart,
  setClickedImage,
} = multiSlice.actions;
export default multiSlice.reducer;
