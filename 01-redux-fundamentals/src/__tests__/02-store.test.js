import { store } from "../exercises";
// import { store } from "../solutions";

describe("Exercise 02", () => {
  describe("store", () => {
    test("handles the actions from exercise 01", () => {
      expect(store.getState()).toEqual({ value: 0 });

      store.dispatch({ type: "counter/incremented" });
      expect(store.getState()).toEqual({ value: 1 });

      store.dispatch({ type: "counter/incremented" });
      expect(store.getState()).toEqual({ value: 2 });

      store.dispatch({ type: "counter/decremented" });
      expect(store.getState()).toEqual({ value: 1 });

      store.dispatch({ type: "@@init" });
      expect(store.getState()).toEqual({ value: 1 });
    });
  });
});
