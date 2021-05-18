import { createSlice } from "@reduxjs/toolkit";

// 📃 https://redux-toolkit.js.org/api/createSlice

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    // ✅ add an initial state here that will let us toggle dark mode from true to false
  },
  reducers: {
    // ✅ add a reducer function that will toggle state from true to false
  },
});

// ✅ export the action creator from your reducer function

export default themeSlice.reducer;
