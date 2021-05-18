import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import ShoppingCart from "./ShoppingCart";
import { addItems } from "../redux/itemsSlice";

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // populate store
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((r) => r.json())
      .then((items) => {
        const action = addItems(items);
        dispatch(action);
      });
  }, [dispatch]);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header />
      <ItemForm />
      <ShoppingList />
      <ShoppingCart />
    </div>
  );
}

export default App;
