import { getByText } from "@testing-library/dom";
import { createStore } from "redux";

import { reducer, setupRender } from "../exercises";
// import { reducer, setupRender } from "../solutions";

describe("Exercise 04", () => {
  let store;
  beforeEach(() => {
    store = createStore(reducer);
    setupRender(store);
  });

  describe("setupRender", () => {
    test("Updating the store re-renders the DOM", () => {
      const count = getByText(document.body, "Count: 0");
      expect(count).toBeInTheDocument();
      store.dispatch({ type: "counter/incremented" });
      expect(count.textContent).toBe("Count: 1");
      store.dispatch({ type: "counter/decremented" });
      expect(count.textContent).toBe("Count: 0");
    });
  });
});
