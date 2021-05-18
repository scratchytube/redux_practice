import { createSlice } from "@reduxjs/toolkit";

// 📃 Here's some helpful reading on createSlice:
// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice
// https://redux-toolkit.js.org/api/createSlice

const groceriesSlice = createSlice({
  name: "groceries",
  initialState: [
    { id: 1, name: "Milk", price: 3, isPurchase: true },
    { id: 2, name: "Cereal", price: 4, isPurchase: false },
    { id: 3, name: "Eggs", price: 2, isPurchase: false },
  ],
  reducers: {
    addToList(state, action) {
      // ✅ update state by adding the new item from action.payload
    },
    purchaseItem(state, action) {
      // ✅ update state by changing the item in action.payload from isPurchase = false to isPurchase = true
      // start by finding the item in state (use state.find, and check the id of the item in action.payload)
      // then, after finding the item, set item.isPurchase = true
    },
  },
});

export const { addToList, purchaseItem } = groceriesSlice.actions;
export default groceriesSlice.reducer;
