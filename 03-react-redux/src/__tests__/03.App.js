import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "../test-utils";
import { server } from "./mocks/server";

// import store from "../solutions/redux/store";
// import App from "../solutions/components/App";
import store from "../exercises/redux/store";
import App from "../exercises/components/App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Exercise 03 - components/App.js", () => {
  test("sets the button text based on the theme", () => {
    const { container } = render(<App />, { store });
    const isDarkMode = store.getState().theme.isDarkMode;
    const className = isDarkMode ? ".App.dark" : ".App.light";
    expect(container.querySelector(className)).toBeInTheDocument();
  });

  test("fetches items and adds them to the Redux store", async () => {
    render(<App />, { store });

    expect(await screen.findByText(/yogurt/i)).toBeInTheDocument();
    expect(await screen.findByText(/pomegranate/i)).toBeInTheDocument();
  });
});
