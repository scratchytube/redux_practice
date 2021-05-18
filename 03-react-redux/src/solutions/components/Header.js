import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/themeSlice";

function Header() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  function handleDarkModeClick() {
    const action = toggleDarkMode();
    dispatch(action);
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
