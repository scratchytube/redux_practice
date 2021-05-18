import userReducer, {
  addTenDollars,
  purchaseItem,
} from "../exercises/01-user-reducer";
// import userReducer, {
//   addTenDollars,
//   purchaseItem,
// } from "../solutions/01-user-reducer";

const initialState = { username: "Duane", budget: 100 };

describe("Exercise 01", () => {
  describe("userReducer", () => {
    test("handles the addTenDollars action", () => {
      const action = { type: "user/addTenDollars" };
      const state = userReducer(initialState, action);
      expect(state.budget).toBe(110);
    });
    test("handles the purchaseItem action", () => {
      const action = {
        type: "user/purchaseItem",
        payload: { isPurchase: false, price: 10 },
      };
      const state = userReducer(initialState, action);
      expect(state.budget).toBe(90);
    });
    test("handles the purchaseItem action if the item has already been purchased", () => {
      const action = {
        type: "user/purchaseItem",
        payload: { isPurchase: true, price: 10 },
      };
      const state = userReducer(initialState, action);
      expect(state.budget).toBe(100);
    });
  });
  describe("addTenDollars", () => {
    test("returns an object with a type of 'user/addTenDollars'", () => {
      expect(addTenDollars()).toEqual({ type: "user/addTenDollars" });
    });
  });
  describe("purchaseItem", () => {
    test("returns an object with a type of 'user/purchaseItem' and a payload of an item object", () => {
      const item = { id: 1, name: "Milk", price: 3, isPurchase: true };
      expect(purchaseItem(item)).toEqual({
        type: "user/purchaseItem",
        payload: item,
      });
    });
  });
});
