import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    categoryFilter: "All",
    nameFilter: "",
  },
  reducers: {
    setCategoryFilter(state, action) {
      state.categoryFilter = action.payload;
    },
    setNameFilter(state, action) {
      state.nameFilter = action.payload;
    },
  },
});

export const { setNameFilter, setCategoryFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
