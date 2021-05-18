import groceriesReducer, {
  addToList,
  purchaseItem,
} from "../exercises/02-groceries-reducer";
// import groceriesReducer, {
//   addToList,
//   purchaseItem,
// } from "../solutions/02-groceries-reducer";

const initialState = [
  { id: 1, name: "Milk", price: 3, isPurchase: true },
  { id: 2, name: "Cereal", price: 4, isPurchase: false },
  { id: 3, name: "Eggs", price: 2, isPurchase: false },
];

describe("Exercise 02", () => {
  describe("groceriesReducer", () => {
    test("handles the addToList action", () => {
      const item = { id: 4, name: "Olives", price: 3, isPurchase: false };
      const action = { type: "groceries/addToList", payload: item };
      const state = groceriesReducer(initialState, action);
      expect(state).toContain(item);
      expect(state).toHaveLength(4);
    });
    test("handles the purchaseItem action", () => {
      const item = { id: 2, name: "Cereal", price: 4, isPurchase: false };
      const action = { type: "groceries/purchaseItem", payload: item };
      const state = groceriesReducer(initialState, action);
      expect(state).toHaveLength(3);
      expect(state).toContainEqual({
        ...item,
        isPurchase: true,
      });
    });
  });
  describe("addToList", () => {
    test("returns an object with a type of 'groceries/addToList' and a payload of the item", () => {
      const item = { id: 2, name: "Cereal", price: 4, isPurchase: false };
      expect(addToList(item)).toEqual({
        type: "groceries/addToList",
        payload: item,
      });
    });
  });
  describe("purchaseItem", () => {
    test("returns an object with a type of 'groceries/purchaseItem' and a payload of an item object", () => {
      const item = { id: 2, name: "Cereal", price: 4, isPurchase: false };
      expect(purchaseItem(item)).toEqual({
        type: "groceries/purchaseItem",
        payload: item,
      });
    });
  });
});
