import {
  addTenDollars,
  purchaseItem as userPurchaseItem,
} from "../exercises/01-user-reducer";
import { addToList, purchaseItem } from "../exercises/02-groceries-reducer";
import store from "../exercises/03-store";
// import {
//   addTenDollars,
//   purchaseItem as userPurchaseItem,
// } from "../solutions/01-user-reducer";
// import { addToList, purchaseItem } from "../solutions/02-groceries-reducer";
// import store from "../solutions/03-store";

describe("Exercise 03", () => {
  describe("store", () => {
    test("handles the actions from exercise 01 and 02", () => {
      expect(store.getState().user.budget).toEqual(100);

      store.dispatch(addTenDollars());
      expect(store.getState().user.budget).toEqual(110);

      const item = { id: 4, name: "Olives", price: 3, isPurchase: false };
      store.dispatch(addToList(item));
      expect(store.getState().groceries).toContainEqual(item);

      store.dispatch(userPurchaseItem(item));
      expect(store.getState().user.budget).toEqual(107);

      store.dispatch(purchaseItem(item));
      expect(store.getState().groceries).toContainEqual({
        ...item,
        isPurchase: true,
      });
    });
  });
});
