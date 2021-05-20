// 📃 Check out these resources on the useDispatch and useSelector hooks!
// https://redux.js.org/tutorials/essentials/part-2-app-structure#dispatching-actions-with-usedispatch
// https://redux.js.org/tutorials/essentials/part-2-app-structure#reading-data-with-useselector

import { toggleDarkMode } from "../redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

function Header() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const dispatch = useDispatch()

  function handleDarkModeClick() {
    const action = toggleDarkMode();
    // console.log(action)
    dispatch(action)
  }

  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
