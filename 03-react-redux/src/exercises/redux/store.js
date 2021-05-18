import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import itemsReducer from "./itemsSlice";
import filtersReducer from "./filtersSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    items: itemsReducer,
    filters: filtersReducer,
  },
});

export default store;
