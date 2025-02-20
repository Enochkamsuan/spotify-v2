import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../../redux/slice/multiSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
