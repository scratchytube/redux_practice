import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems(state, action) {
      return action.payload;
    },
    addOneItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      // find the index of the item we're removing
      const index = state.findIndex((item) => item === action.payload);
      // splice to remove the item from the array
      state.splice(index, 1);
    },
    updateItem(state, action) {
      // find the index of the item we're updating
      const index = state.findIndex((item) => item.id === action.payload.id);
      // replace the item at that index with our new item
      state[index] = action.payload;
    },
  },
});

export const {
  addItems,
  addOneItem,
  removeItem,
  updateItem,
} = itemsSlice.actions;
export default itemsSlice.reducer;
