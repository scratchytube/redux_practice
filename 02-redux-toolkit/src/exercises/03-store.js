import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./01-user-reducer";
import groceriesReducer from "./02-groceries-reducer";

// 📃 https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-configurestore

// ✅ use the configureStore function to replace the code from line 10-15 and create a store
const reducer = combineReducers({
  groceries: groceriesReducer,
  user: userReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
