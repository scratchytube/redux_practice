import { createSlice } from "@reduxjs/toolkit";

const groceriesSlice = createSlice({
  name: "groceries",
  initialState: [
    { id: 1, name: "Milk", price: 3, isPurchase: true },
    { id: 2, name: "Cereal", price: 4, isPurchase: false },
    { id: 3, name: "Eggs", price: 2, isPurchase: false },
  ],
  reducers: {
    addToList(state, action) {
      state.push(action.payload);
    },
    purchaseItem(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      item.isPurchase = true;
    },
  },
});

export const { addToList, purchaseItem } = groceriesSlice.actions;
export default groceriesSlice.reducer;
