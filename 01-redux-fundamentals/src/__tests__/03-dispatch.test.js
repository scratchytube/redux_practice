import { getByText, fireEvent } from "@testing-library/dom";
import { createStore } from "redux";

import { reducer, setupEvents } from "../exercises";
// import { reducer, setupEvents } from "../solutions";

describe("Exercise 03", () => {
  let store;
  beforeEach(() => {
    store = createStore(reducer);
    setupEvents(store);
  });

  describe("increment button", () => {
    test("Dispatches an increment action to the store when clicked", () => {
      expect(store.getState()).toEqual({ value: 0 });
      const button = getByText(document.body, "+");
      fireEvent.click(button);
      expect(store.getState()).toEqual({ value: 1 });
      fireEvent.click(button);
      expect(store.getState()).toEqual({ value: 2 });
    });
  });

  describe("decrement button", () => {
    test("Dispatches a decrement action to the store when clicked", () => {
      expect(store.getState()).toEqual({ value: 0 });
      const button = getByText(document.body, "-");
      fireEvent.click(button);
      expect(store.getState()).toEqual({ value: -1 });
      fireEvent.click(button);
      expect(store.getState()).toEqual({ value: -2 });
    });
  });
});
