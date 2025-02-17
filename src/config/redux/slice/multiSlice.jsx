import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPaymentStatus: false,
};

const multiSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setShowPaymentStatus(state, action) {
      state.showPaymentStatus = action.payload;
    },
  },
});
export const { setShowPaymentStatus } = multiSlice.actions;
export default multiSlice.reducer;
