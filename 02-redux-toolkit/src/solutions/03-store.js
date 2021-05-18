import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./01-user-reducer";
import groceriesReducer from "./02-groceries-reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    groceries: groceriesReducer,
  },
});

export default store;
