import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "Duane",
    budget: 100,
  },
  reducers: {
    addTenDollars(state) {
      state.budget = state.budget + 10;
    },
    purchaseItem(state, action) {
      if (!action.payload.isPurchase) {
        state.budget = state.budget - action.payload.price;
      }
    },
  },
});

export const { addTenDollars, purchaseItem } = userSlice.actions;
export default userSlice.reducer;
