// import themeReducer, { toggleDarkMode } from "../solutions/redux/themeSlice";
import themeReducer, { toggleDarkMode } from "../exercises/redux/themeSlice";

describe("Exercise 01 - redux/themeSlice.js", () => {
  describe("themeReducer", () => {
    test("has an initial state of isDarkMode set to false", () => {
      const state = themeReducer(undefined, { type: "@@INIT" });
      expect(state.isDarkMode).toBe(false);
    });

    test("handles the toggleDarkMode action", () => {
      let state = themeReducer(undefined, { type: "@@INIT" });
      state = themeReducer(state, { type: "theme/toggleDarkMode" });
      expect(state.isDarkMode).toBe(true);
      state = themeReducer(state, { type: "theme/toggleDarkMode" });
      expect(state.isDarkMode).toBe(false);
    });
  });

  describe("toggleDarkMode action creator", () => {
    test("returns an object with a type of 'theme/toggleDarkMode'", () => {
      expect(toggleDarkMode()).toEqual({ type: "theme/toggleDarkMode" });
    });
  });
});
