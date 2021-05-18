import { createSlice } from "@reduxjs/toolkit";

// 📃 Here's some helpful reading on createSlice:
// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice
// https://redux-toolkit.js.org/api/createSlice

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "Duane",
    budget: 100,
  },
  reducers: {
    addTenDollars(state) {
      // ✅ update the budget by adding 10
    },
    purchaseItem(state, action) {
      // ✅ update the budget by subtracting action.payload.price
      // make sure to check if the item has already been purchased before updating the budget!
      // use action.payload.isPurchase to determine if the item is already purchased
    },
  },
});

export const { addTenDollars, purchaseItem } = userSlice.actions;
export default userSlice.reducer;
