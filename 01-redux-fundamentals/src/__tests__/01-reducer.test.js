import { reducer } from "../exercises";
// import { reducer } from "../solutions";

describe("Exercise 01", () => {
  describe("reducer", () => {
    test("returns 1 when called with state of { value: 0 } and action of { type: 'counter/incremented' }", () => {
      const action = { type: "counter/incremented" };
      expect(reducer({ value: 0 }, action)).toEqual({ value: 1 });
    });
    test("returns 2 when called with state of { value: 1 } and action of { type: 'counter/incremented' }", () => {
      const action = { type: "counter/incremented" };
      expect(reducer({ value: 1 }, action)).toEqual({ value: 2 });
    });
    test("returns 1 when called with state of { value: 2 } and action of { type: 'counter/decremented' }", () => {
      const action = { type: "counter/decremented" };
      expect(reducer({ value: 2 }, action)).toEqual({ value: 1 });
    });
    test("returns 0 when called with state of undefined and an action of { type: '@@init' }", () => {
      const action = { type: "@@init" };
      expect(reducer(undefined, action)).toEqual({ value: 0 });
    });
    test("returns 1 when called with state of { value: 1 } and action of { type: '@@init' }", () => {
      const action = { type: "@@init" };
      expect(reducer({ value: 10 }, action)).toEqual({ value: 10 });
    });
  });
});
