import React from "react";
// 📃 Check out these resources on the useDispatch and useSelector hooks!
// https://redux.js.org/tutorials/essentials/part-2-app-structure#dispatching-actions-with-usedispatch
// https://redux.js.org/tutorials/essentials/part-2-app-structure#reading-data-with-useselector

import { useDispatch, useSelector } from "react-redux";

// ✅ uncomment the line below to import the action you made in the first exercise
// import { toggleDarkMode } from "../redux/themeSlice";

function Header() {
  // ✅ use the useSelector hook to get the isDarkMode value from Redux state
  // replace this variable with the value returned by useSelector
  const isDarkMode = true;

  // ✅ use the useDispatch hook to access the dispatch function

  function handleDarkModeClick() {
    // ✅ uncomment the line below - this is the action you created in the first exercise!
    // const action = toggleDarkMode();
    // ✅ use the dispatch function from useDispatch to send this action to our reducer
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
