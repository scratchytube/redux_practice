import {
  incremented,
  decremented,
  incrementedBy,
} from "../exercises/05-action-creators";
// import {
//   incremented,
//   decremented,
//   incrementedBy,
// } from "../solutions/05-action-creators";

describe("Exercise 05", () => {
  describe("incremented", () => {
    test("returns an object with a type of 'counter/incremented'", () => {
      expect(incremented()).toEqual({
        type: "counter/incremented",
      });
    });
    test("returns an object with a type of 'counter/decremented'", () => {
      expect(decremented()).toEqual({
        type: "counter/decremented",
      });
    });
    test("returns an object with a type of 'counter/incrementedBy'", () => {
      expect(incrementedBy(10)).toEqual({
        type: "counter/incrementedBy",
        payload: 10,
      });
    });
  });
});
