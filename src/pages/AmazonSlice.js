import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
  
};

export const AmazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  
  },
  
});

export const {

 
  setUserInfo, 
} = AmazonSlice.actions;
export default AmazonSlice.reducer;