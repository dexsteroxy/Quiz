import { configureStore } from '@reduxjs/toolkit';
import amazonReducer from "../pages//AmazonSlice"

export const store = configureStore({
  reducer: {amazonReducer},
});