import "@testing-library/jest-dom";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "../test-utils";

// import themeReducer from "../solutions/redux/themeSlice";
// import Header from "../solutions/components/Header";
import themeReducer from "../exercises/redux/themeSlice";
import Header from "../exercises/components/Header";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

describe("Exercise 02 - components/Header.js", () => {
  test("sets the button text based on the theme", () => {
    render(<Header />, { store });
    expect(screen.getByText(/light mode/i)).toBeInTheDocument();
  });
  test("toggles the theme on clicking the button", () => {
    render(<Header />, { store });
    const button = screen.getByText(/light mode/i);
    fireEvent.click(button);
    expect(screen.getByText(/dark mode/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/light mode/i)).toBeInTheDocument();
  });
});
